const accountsRoutes = require('./swift/accounts.routes')
const transactionsRoutes = require('./swift/transactions.routes')
const {
  AuthRequired,
} = require("../middleware/auth/auth-required.middleware");
const {User} = require('../models/user.model')

const router = require("express").Router();


router.use('/accounts', accountsRoutes)
router.use('/transactions', transactionsRoutes)

router.get('/',AuthRequired, async (req, res) => {
  const user = await User.findById(req.user.id)

  res.json({
    accounts: user.accounts,
    transactions: user.transactions
  })
})


module.exports = router;
