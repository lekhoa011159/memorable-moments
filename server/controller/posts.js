const Posts = require("../models/Posts");
const utils = require("./utils");

module.exports.create = (req, res) => {
  try {
    const post = new Posts(req.body);
    console.log(post.createdAt);
    post
      .save()
      .then(() => {
        res.status(200).send(post);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("Cannot create post !");
      });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports.readOne = (req, res) => {
  const { itemId } = req.params;

  if (itemId) {
    Posts.find({ _id: itemId })
      .then((data) => res.status(200).send(data[0]))
      .catch((err) => res.status(404).end());
  }
  // else {
  //   res.status(404);
  // }
};

module.exports.read = (req, res) => {
  // const { title } = req.query;
  let queryObj = {};
  if (!utils.objectUtils.isEmpty(req.query)) {
    queryObj = { ...req.query };
  }

  Posts.find(queryObj)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(400).send("Cannot get list of posts !");
      console.log(err);
    });
};

module.exports.readBy = (req, res) => {
  // const { title } = req.query;
  let queryObj = {};
  if (!utils.objectUtils.isEmpty(req.query)) {
    queryObj = { ...req.query };
  }

  if (queryObj && queryObj["tags"]) {
    const tags = queryObj["tags"].split(",");
    // pick one luckiest tag to recommend
    const luckyTagIndex = Math.floor(Math.random() * tags.length);
    const luckyTag = tags[luckyTagIndex];
    if (luckyTag) {
      Posts.find({
        tags: { $regex: luckyTag },
        _id: { $ne: queryObj["withId"] },
      })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send(`Error: ${err}`));
    } else {
      res.status(200).send("You are the only");
    }
  }
};

module.exports.update = (req, res) => {
  if (req.body) {
    const { _id } = req.body;
    Posts.updateOne({ _id }, { ...req.body })
      .then((data) => res.status(200).send(data))
      .catch((err) => console.log(`cannot update, err: ${err}`));
  } else res.send(`No req.body founded.`);
};

module.exports.delete = (req, res) => {
  const _id = req.query.id;
  if (_id) {
    Posts.deleteOne({ _id })
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        res.status(400).send("Cannot get list of posts !");
        console.log(err);
      });
  }
};
