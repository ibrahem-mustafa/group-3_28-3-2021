const express = require("express");
const router = express.Router();
const { Article } = require("../models/articles.model");
const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../config/auth.config");

const {
  ValidateToken,
} = require("../middleware/auth/validate-token.middleware");
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

// const user = {
//   id: "123984798217349",
//   name: "ahmed ali",
// };

const articles = [];

async function tryCatch(res, code) {
  try {
    await code();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Not Allowed" });
  }
}

function getTokenDataFromRequest(req) {
  const token = req.headers.authorization.split(" ")[1];
  const data = jwt.verify(token, JWT_KEY);
  return data;
}

// Get All Articles For Each Uer
router.get("/", ValidateToken, async (req, res) => {
  const articles = await Article.find({ "publisher.id": req.user.id });

  res.json({
    articles,
  });
});

// Get Article By Id
router.get("/:id", ValidateToken, async (req, res) => {
  const { id } = req.params;

  const article = await Article.findById(id);

  if (!article) {
    return res.status(404).json({
      message: "Article Not Found",
    });
  }

  if (article.publisher.id != req.user.id) {
    return res
      .status(403)
      .json({ message: "Not Allowed To Reach This Article" });
  }

  res.json({ article });

  // const article = articles.find(art => art.id == id)

  // Get Document (article) By It's Id
  // const article = await Article.findOne({ _id: id })
});

// Create New Article For User
// title, content

// TOKEN => "Bearer token"

router.post("/", ValidateToken, async (req, res) => {
  // ACCESS REQUEST BODY AND GET DATA
  const { title, content } = req.body;
  // CREATE NEW ARTICLE WITH GIVEN DATA
  const article = new Article({
    title,
    content,
    publisher: {
      id: req.user.id,
      name: req.user.name,
    },
  });
  // SAVE ARTICLE
  await article.save();
  // SEND BACK THE NEW ARTICLE IN RESPONSE
  res.json({
    article,
  });
});

router.put("/:id", ValidateToken, async (req, res) => {
  // ACCESS REQUEST BODY AND GET DATA
  const { title, content } = req.body;
  // ACCESS REQUEST PARAMS AND GET ARTICLE ID
  const { id } = req.params;
  // FIND ARTICLE WITH GIVEN ID
  // const article = await Article.findById(id)
  // // IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
  // if (!article) return res.status(404).json({ message: 'Article Not Found' })
  // // IF ARTICLE FOUND UPDATE IT WITH GIVEN DATA
  // // if (title) {
  // //     article.title = title
  // // }
  // // if (content) {
  // //     article.content = content
  // // }
  // article.title = title || article.title
  // article.content = content || article.content

  // await article.save()

  const update = {};

  if (title) update.title = title;
  if (content) update.content = content;

  // const article = await Article.findByIdAndUpdate(id, update, { new: true });
  const article = await Article.findOneAndUpdate(
    { _id: id, "publisher.id": req.user.id },
    update,
    { new: true }
  );

  if (!article) return res.status(404).json({ message: "Article Not Found" });
  // SEND BACK THE UPDATED ARTICLE
  res.json({ article });
});

router.delete("/:id", ValidateToken, async (req, res) => {
  // ACCESS REQUEST PARAMS AND GET ARTICLE ID
  const { id } = req.params;
  //   // FIND ARTICLE WITH GIVEN ID
  //   const articleIndex = articles.findIndex((art) => art.id == id);
  //   // IF ARTICLE NOT FOUND SEND BACK A 404 ERROR
  //   if (articleIndex == -1)
  //     return res
  //       .status(404)
  //       .json({ messages: "Article With Given Id Is Not Found" });
  //   // IF ARTICLE FOUND, DELETE THAT ARTICLE
  //   articles.splice(articleIndex, 1);

  const article = await Article.findOneAndDelete({
    _id: id,
    "publisher.id": req.user.id,
  });

  if (!article) return res.status(404).json({ message: "Article Not Found" });

  // SEND BACK A MESSAGE WITH THE RESULT
  res.json({ message: "Article Deleted Successfully" });
});

module.exports = router;
