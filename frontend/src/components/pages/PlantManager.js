import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlant, updatePlant, deletePlant } from '../../redux/plantSlice';

const PlantManager = () => {
    const dispatch = useDispatch();
    const plants = useSelector(state => state.plants.plants);
    const [newPlant, setNewPlant] = useState({ name: '', species: '', waterFrequency: '', sunlight: '' });
    const [editId, setEditId] = useState(null);
    
    const handleAddOrUpdate = () => {
        if (editId) {
            dispatch(updatePlant(editId, newPlant));
        } else {
            dispatch(addPlant(newPlant));
        }
        setNewPlant({ name: '', species: '', waterFrequency: '', sunlight: '' });
        setEditId(null);
    };

    const handleEdit = (plant) => {
        setNewPlant({ name: plant.name, species: plant.species, waterFrequency: plant.waterFrequency, sunlight: plant.sunlight });
        setEditId(plant._id);
    };

    const handleDelete = (id) => {
        dispatch(deletePlant(id));
    };

    return (
        <div>
            <h2>Plant Manager</h2>
            <input
                type="text"
                placeholder="Name"
                value={newPlant.name}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Species"
                value={newPlant.species}
                onChange={(e) => setNewPlant({ ...newPlant, species: e.target.value })}
            />
            <input
                type="text"
                placeholder="Water Frequency"
                value={newPlant.waterFrequency}
                onChange={(e) => setNewPlant({ ...newPlant, waterFrequency: e.target.value })}
            />
            <input
                type="text"
                placeholder="Sunlight"
                value={newPlant.sunlight}
                onChange={(e) => setNewPlant({ ...newPlant, sunlight: e.target.value })}
            />
            <button onClick={handleAddOrUpdate}>{editId ? 'Update' : 'Add'}</button>

            <ul>
                {plants.map(plant => (
                    <li key={plant._id}>
                        <span>{plant.name} - {plant.species}</span>
                        <button onClick={() => handleEdit(plant)}>Edit</button>
                        <button onClick={() => handleDelete(plant._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlantManager;
