const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const { Post, User, Comment } = require('../../models');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);



router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;