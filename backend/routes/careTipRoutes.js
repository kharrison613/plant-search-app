const express = require('express');
const router = express.Router();
const CareTip = require('../models/CareTip');

// GET all care tips
router.get('/', async (req, res) => {
    try {
        const careTips = await CareTip.find().populate('plant');
        res.json(careTips);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching care tips' });
    }
});

// ADD a new care tip
router.post('/', async (req, res) => {
    try {
        const newCareTip = new CareTip(req.body);
        const savedCareTip = await newCareTip.save();
        res.status(201).json(savedCareTip);
    } catch (error) {
        res.status(400).json({ error: 'Error saving care tip' });
    }
});

// UPDATE an existing care tip
router.put('/:id', async (req, res) => {
    try {
        const updatedCareTip = await CareTip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCareTip);
    } catch (error) {
        res.status(400).json({ error: 'Error updating care tip' });
    }
});

// DELETE a care tip
router.delete('/:id', async (req, res) => {
    try {
        await CareTip.findByIdAndDelete(req.params.id);
        res.json({ message: 'Care tip deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting care tip' });
    }
});

module.exports = router;
