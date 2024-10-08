import React from 'react';
import { useSelector } from 'react-redux';

const PlantList = () => {
    const { plants, loading, error } = useSelector((state) => state.plants);
console.log(plants);

    if (loading) return <p>Loading...</p>;
    if (error) return (
    <div>
    <p>Error: {error}</p>;
    <button onClick={() => window.location.reload()}>Retry</button>
    </div>
    );


    // function PlantList({ plants }) {
    return (
        <ul className="plant-list">
            {plants.map((plant) => (
                <li key={plant._id}>
                    <h2>{plant.CommonName}</h2>
                    <p><strong>Scientific Name:</strong> {plant.ScientificName}</p>
                    <p><strong>Family:</strong> {plant.Family}</p>
                    <p><strong>Genus:</strong> {plant.Genus}</p>
                    <p><strong>Species:</strong> {plant.Species}</p>
                </li>
            ))}
        </ul>
    );
};

export default PlantList;
 

//     return (
//         <ul className="plant-list">
//             { {plants.map((plant) => (
//                 <li key={plant.id}>
//                     <h2>{plant.name}</h2>
//                     <p>{plant.description}</p>
//                 </li>
//             ))} }
//         </ul>
//     );
// };

// export default PlantList;
