const express = require ('express');
const Plant = require ('../models/Plant.js');

const router = express.Router();

// GET all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find().populate('user');
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new plant
router.post('/', async (req, res) => {
  const plant = new Plant({
    name: req.body.name,
    species: req.body.species,
    waterFrequency: req.body.waterFrequency,
    sunlight: req.body.sunlight,
    user: req.body.user
  });

  try {
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH an existing plant
router.patch('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (req.body.name) plant.name = req.body.name;
    if (req.body.species) plant.species = req.body.species;
    if (req.body.waterFrequency) plant.waterFrequency = req.body.waterFrequency;
    if (req.body.sunlight) plant.sunlight = req.body.sunlight;
    if (req.body.user) plant.user = req.body.user;

    const updatedPlant = await plant.save();
    res.json(updatedPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a plant
router.delete('/:id', async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plant deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;