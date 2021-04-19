const router = require('express').Router()
const {AuthRequired} = require('../../middleware/auth/auth-required.middleware')
const {User} = require('../../models/user.model')

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

router.post('/',AuthRequired, async (req, res) => {
    const {name, balance} = req.body;
    
    const user = await User.findById(req.user.id)

    user.accounts.push({
        name,
        balance
    })

    await user.save();

    res.status(201).json({
        accounts: user.accounts
    })
})
module.exports = router;