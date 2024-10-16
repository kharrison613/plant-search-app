const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// GET user profile
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
});

// UPDATE user profile
router.put('/:id', async (req, res) => {
    try {
        const updatedData = req.body;

        // Hash password if updated
        if (updatedData.password) {
            const salt = await bcrypt.genSalt(10);
            updatedData.password = await bcrypt.hash(updatedData.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error updating user' });
    }
});

// DELETE user profile
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting user' });
    }
});

module.exports = router;
