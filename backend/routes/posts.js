const express = require("express");

const PostControoler = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();


router.post("", checkAuth, extractFile, PostControoler.createPost);

router.put("/:id", checkAuth, extractFile, PostControoler.updatePost);

router.get('', PostControoler.getPosts);

router.get('/:id', PostControoler.getPost);

router.delete('/:id', checkAuth, PostControoler.deletePost);

module.exports = router;
