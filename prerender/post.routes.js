var router = require('express').Router();
var PostController = require('./post.controller');

router.route('/').get(PostController.showAllPosts);
router.route('/post/:id/:slug').get(PostController.showSinglePost);

module.exports = router;
