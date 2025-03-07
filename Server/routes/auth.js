import express from 'express';
import { register, login, logout, getUserDetails } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', authenticateUser, getUserDetails);  // Add this endpoint

export default router;
