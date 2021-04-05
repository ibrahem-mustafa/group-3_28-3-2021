const express = require('express')
const router = express.Router()

// const atr = {
//     id: 1,
//     title: 'string',
//     content: 'string',
//     publisher : { 
//         name: 'string',
//         id: 'string'
//     },
//     createdAt: 'date'
// }

const user = {
    id: '123984798217349',
    name: 'ahmed ali'
}

const articles = []

// Get All Articles For Each Uer
router.get('/', (req, res) => {
    res.json({
        articles
    })
})

// Create New Article For User
// title, content
router.post('/', (req, res) => {
    // TODO: ACCESS REQUEST BODY AND GET DATA
    const { title, content } = req.body;
    // TODO: CREATE NEW ARTICLE WITH GIVEN DATA
    const article = {
        id: new Date().getTime(),
        title, content,
        publisher: {
            id: user.id,
            name: user.name
        },
        createdAt: new Date()
    }
    // TODO: SAVE ARTICLE
    articles.push(article)
    // TODO: SEND BACK THE NEW ARTICLE IN RESPONSE
    res.json({
        article
    })
})

router.put('/', (req, res) => {
    // TODO: ACCESS REQUEST BODY AND GET DATA
    // TODO: ACCESS REQUEST PARAMS AND GET ARTICLE ID
    // TODO: FIND ARTICLE WITH GIVEN ID
    // TODO: IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
    // TODO: IF ARTICLE FOUND UPDATE IT WITH GIVEN DATA
    // TODO: SEND BACK THE UPDATED ARTICLE
    
})

router.delete('/', (req, res) => {
  // TODO: ACCESS REQUEST PARAMS AND GET ARTICLE ID
  // TODO: FIND ARTICLE WITH GIVEN ID
  // TODO: IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
  // TODO: IF ARTICLE FOUND, DELETE THAT ARTICLE
  // TODO: SEND BACK A MESSAGE WITH THE RESULT
})


module.exports = router;