const router = require('express').Router();

const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const commentsRoutes = require('./commentsRoutes');
const profileRoutes = require('./profileRoutes');
const storiesRoutes = require('./storiesRoutes');
const videosRoutes = require('./videosRoutes');

router.use('/auth', authRoutes);
router.use('/api', adminRoutes);
router.use('/api', categoriesRoutes);
router.use('/api', commentsRoutes);
router.use('/api', profileRoutes);
router.use('/api', storiesRoutes);
router.use('/api', videosRoutes);

module.exports = router;