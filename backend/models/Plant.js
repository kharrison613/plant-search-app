// const mongoose = require('mongoose');

// const PlantSchema = new mongoose.Schema({
//     CommonName: { type: String, required: true },
//     ScientificName: { type: String, required: true },
//     Family: { type: String },
//     Genus: { type: String },
//     Species: { type: String }
// });

// module.exports = mongoose.model('Plant', PlantSchema);
import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  waterFrequency: { type: String, required: true },
  sunlight: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

plantSchema.index({ name: 1 }); 

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;