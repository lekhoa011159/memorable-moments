const router = require("express").Router();
const posts = require("../controller/posts");

router.get("/", posts.read);
router.get("/by", posts.readBy);
router.get("/totalCount", posts.readTotal);
router.get("/:itemId", posts.readOne);

router.post("/", posts.create);

router.put("/", posts.update);

router.delete("/", posts.delete);

module.exports = router;
