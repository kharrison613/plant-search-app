const express = require('express');
 const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const plantRoutes = require('./routes/plantRoutes');
const userRoutes = require('./routes/userRoutes'); // Import user routes

dotenv.config();
connectDB();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(cors());
app.use(express.json());

app.use('/api/plant', plantRoutes);
app.use('/api/user', userRoutes); // Add user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
