const router = require("express").Router();
const { User } = require("../../models/user.model");
const {
  AuthRequired,
} = require("../../middleware/auth/auth-required.middleware");

const { body, validationResult } = require("express-validator");

// get all transactions

router.get("/", AuthRequired, async (req, res) => {
  const user = await User.findById(req.user.id);
  
  res.json({ transactions: user.transactions });
});

// get account transactions
router.get('/:id', AuthRequired, async (req,res) => {
    const id = req.params.id;
    const user = await User.findById(req.user.id);

    const transactions = user.transactions.filter(tr => (tr.from.id == id || tr.to.id == id))

    res.json({transactions})

})

// create transaction
const createTransactionValidation = [
  body("type")
    .exists()
    .notEmpty()
    .isIn(["income", "expense", "transfer"])
    .withMessage("Invalid Type, Must Be In (income, expense, transfer)"),
  body("fromId").exists().notEmpty().withMessage("From Id Must Be Provided"),
  body("toId").exists().notEmpty().withMessage("To Id Must Be Provided"),
  body("amount")
    .exists()
    .notEmpty()
    .isFloat({ min: 1 })
    .withMessage("Amount Must Be A Valid Number & Greater Than 0"),
];

router.post(
  "/",
  AuthRequired,
  createTransactionValidation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const user = await User.findById(req.user.id);
    const accounts = user.accounts;

    const { type, fromId, toId, amount, note } = req.body;
    // type = income | expense | transfer

    const amountSign = ["expense", "transfer"].includes(type) ? -1 : +1;

    const from = accounts.find((acc) => acc._id == fromId);
    if (!from) return notFound("From Account", res);
    
    // B: 1000
    // A: 150
    // S: -1
    // 1000 + (150 * -1) = 1000 + (-150) = 1000 - 150 = 850

    // '30' => +'30' => 30
    from.balance += +amount * amountSign;

    let to;
    if (type !== "transfer") {
      to = from;
    } else {
      to = accounts.find((acc) => acc._id == toId);
      if (!to) return notFound("To Account", res);

      to.balance += Number(amount);
    }

    const transaction = {
      type,
      amount,
      from: {
        id: from._id,
        name: from.name,
      },
      to: {
        id: to._id,
        name: to.name,
      },
      note,
    };

    user.transactions.push(transaction);

    await user.save();

    res.status(201).json({ transaction });
  }
);

function notFound(item, res) {
  return res.status(404).json({ msg: `${item} Not Found` });
}

// delete transaction
router.delete("/:id", AuthRequired, async (req, res) => {
  const user = await User.findById(req.user.id);

  const transactionIndex = user.transactions.findIndex(
    (tr) => tr._id == req.params.id
  );
  const transaction = user.transactions[transactionIndex];
  const { from, to, amount, type } = transaction;

  const amountSign = ["expense", "transfer"].includes(type) ? 1 : -1;

  const fromAccount = user.accounts.find((acc) => acc._id == from.id);
  fromAccount.balance += amountSign * amount;

  if (type == "transfer") {
    const toAccount = user.accounts.find((acc) => acc._id == to.id);
    toAccount.balance -= amount;
  }

  user.transactions.splice(transactionIndex, 1);

  await user.save();

  res.json({ accounts: user.accounts, transaction });
});

module.exports = router;
