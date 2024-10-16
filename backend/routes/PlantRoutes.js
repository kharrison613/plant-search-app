const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// GET all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching plants' });
    }
});

// ADD a new plant
router.post('/', async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(400).json({ error: 'Error saving plant' });
    }
});

// UPDATE an existing plant
router.put('/:id', async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlant);
    } catch (error) {
        res.status(400).json({ error: 'Error updating plant' });
    }
});

// DELETE a plant
router.delete('/:id', async (req, res) => {
    try {
        await Plant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Plant deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting plant' });
    }
});

module.exports = router;
