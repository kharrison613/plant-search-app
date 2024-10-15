// backend/controllers/plantController.js
const Plant = require('../models/Plant');

// Get all plants
const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Add a new plant
const createPlant = async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Update a plant
const updatePlant = async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlant);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Delete a plant
const deletePlant = async (req, res) => {
    try {
        await Plant.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    getPlants,
    createPlant,
    updatePlant,
    deletePlant
};
