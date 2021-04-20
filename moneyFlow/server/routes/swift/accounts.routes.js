const router = require('express').Router()
const {AuthRequired} = require('../../middleware/auth/auth-required.middleware')
const {User} = require('../../models/user.model')
const {body, validationResult} = require('express-validator')

// /swift/accounts/
router.get('/', AuthRequired, async (req, res) => {
    const user = await User.findById(req.user.id)
    
    res.json({accounts: user.accounts})
})

router.get('/:id', AuthRequired, async (req,res) => {
    const {id} = req.params
    
    const user = await User.findById(req.user.id)

    const account = user.accounts.find(account => account._id == id)

    if (!account) return res.status(404).json({msg: "Account Not Found"})

    res.json({account})
})

const createAccountValidation = [
  body("name").notEmpty().withMessage("Name Must Be Valid"),
  body("balance")
    .notEmpty()
    .isFloat({ min: 0, max: 10000 })
    .withMessage("Balance Must Be In Range Of 1-10000"),
];

router.post("/", AuthRequired, createAccountValidation, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, balance } = req.body;
  const user = await User.findById(req.user.id);

  user.accounts.push({
    name,
    balance,
  });

  await user.save();

  res.status(201).json({
    accounts: user.accounts,
  });
});
module.exports = router;