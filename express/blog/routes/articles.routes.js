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


// Get Article By Id
router.get('/:id', (req, res) => {
    const {id} = req.params
    
    const article = articles.find(art => art.id == id)

    if (!article) {
        return res.status(404).json({
            message: 'Article Not Found'
        })
    }
    

    res.json({article})
})

// Create New Article For User
// title, content
router.post('/', (req, res) => {
    // ACCESS REQUEST BODY AND GET DATA
    const { title, content } = req.body;
    // CREATE NEW ARTICLE WITH GIVEN DATA
    const article = {
        id: new Date().getTime(),
        title, content,
        publisher: {
            id: user.id,
            name: user.name
        },
        createdAt: new Date()
    }
    // SAVE ARTICLE
    articles.push(article)
    // SEND BACK THE NEW ARTICLE IN RESPONSE
    res.json({
        article
    })
})

router.put('/:id', (req, res) => {
    // ACCESS REQUEST BODY AND GET DATA
    const {title, content} = req.body
    // ACCESS REQUEST PARAMS AND GET ARTICLE ID
    const {id} = req.params
    // FIND ARTICLE WITH GIVEN ID
    const article = articles.find(art => art.id == id)
    // IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
    if (!article) return res.status(404).json({ message: 'Article Not Found' })
    // IF ARTICLE FOUND UPDATE IT WITH GIVEN DATA
    // if (title) {
    //     article.title = title
    // }
    // if (content) {
    //     article.content = content
    // }
    article.title = title || article.title
    article.content = content || article.content
    // SEND BACK THE UPDATED ARTICLE
    res.json({article})
    
})

router.delete('/:id', (req, res) => {
  // ACCESS REQUEST PARAMS AND GET ARTICLE ID
  const {id} = req.params
  // FIND ARTICLE WITH GIVEN ID
  const articleIndex = articles.findIndex(art => art.id == id);
  // IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
  if (articleIndex == -1) return res.status(404).json({messages: 'Article With Given Id Is Not Found'})
  // IF ARTICLE FOUND, DELETE THAT ARTICLE
  articles.splice(articleIndex, 1)
  // SEND BACK A MESSAGE WITH THE RESULT
  res.json({message: 'Article Deleted Successfully'})
})


module.exports = router;