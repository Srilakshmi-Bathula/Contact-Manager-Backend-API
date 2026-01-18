const express = require('express');
const { 
    registeredUser, 
    currentUser, 
    loginUser 
} = require('../controllers/userControllers');

const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post("/register", registeredUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router; 