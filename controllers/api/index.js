
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

router.use('/comments', commentRoutes);

module.exports = router;
