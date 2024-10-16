// frontend/src/components/CareTipManager.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCareTips, addCareTip, updateCareTip, deleteCareTip } from '../redux/careTipSlice';

const CareTipManager = () => {
    const dispatch = useDispatch();
    const careTips = useSelector(state => state.careTips.careTips);
    const [newCareTip, setNewCareTip] = useState({ plant: '', tip: '' });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchCareTips());
    }, [dispatch]);

    const handleAddOrUpdate = () => {
        if (editId) {
            dispatch(updateCareTip(editId, newCareTip));
        } else {
            dispatch(addCareTip(newCareTip));
        }
        setNewCareTip({ plant: '', tip: '' });
        setEditId(null);
    };

    const handleEdit = (careTip) => {
        setNewCareTip({ plant: careTip.plant, tip: careTip.tip });
        setEditId(careTip._id);
    };

    const handleDelete = (id) => {
        dispatch(deleteCareTip(id));
    };

    return (
        <div>
            <h2>Care Tip Manager</h2>
            <input
                type="text"
                placeholder="Plant ID"
                value={newCareTip.plant}
                onChange={(e) => setNewCareTip({ ...newCareTip, plant: e.target.value })}
            />
            <input
                type="text"
                placeholder="Tip"
                value={newCareTip.tip}
                onChange={(e) => setNewCareTip({ ...newCareTip, tip: e.target.value })}
            />
            <button onClick={handleAddOrUpdate}>{editId ? 'Update' : 'Add'}</button>

            <ul>
                {careTips.map(tip => (
                    <li key={tip._id}>
                        <span>{tip.plant} - {tip.tip}</span>
                        <button onClick={() => handleEdit(tip)}>Edit</button>
                        <button onClick={() => handleDelete(tip._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CareTipManager;
