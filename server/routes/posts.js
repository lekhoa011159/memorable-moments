const router = require("express").Router();
const posts = require("../controller/posts");

router.post("/", posts.create);
router.get("/", posts.read);
router.get("/by", posts.readBy);
router.get("/:itemId", posts.readOne);
router.put("/", posts.update);
router.delete("/", posts.delete);

module.exports = router;
