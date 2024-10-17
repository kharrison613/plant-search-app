import Plant from '../models/Plant.js'; // Make sure the path is correct and includes .js if necessary

// Get all plants
export const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Server Error' });
    }
};

// Add a new plant
export const createPlant = async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Update a plant
export const updatePlant = async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        res.json(updatedPlant);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Delete a plant
export const deletePlant = async (req, res) => {
    try {
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
        if (!deletedPlant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Server Error' });
    }
};
