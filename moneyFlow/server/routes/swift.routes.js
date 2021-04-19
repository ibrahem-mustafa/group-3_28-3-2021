const accountsRoutes = require('./swift/accounts.routes')
const transactionsRoutes = require('./swift/transactions.routes')

const router = require("express").Router();


router.use('/accounts', accountsRoutes)
router.use('/transactions', transactionsRoutes)


module.exports = router;
