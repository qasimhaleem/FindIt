const express = require('express');
const router = express.Router();
const { register, login, getProfile, updateProfile, updatePassword, deleteAccount, exportData } = require('../controllers/auth.controller.js');
const { protect } = require('../middleware/auth.middleware.js');

router.post('/register', register);
router.post('/login', login);

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.put('/password', protect, updatePassword);
router.delete('/profile', protect, deleteAccount);
router.get('/export', protect, exportData);

module.exports = router;
