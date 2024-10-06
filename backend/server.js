const express = require('express')
const app = express()
// const cors = require('cors')
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); 
dotenv.config();


const connectDB = require('./config/database');
connectDB.connect();
//middlewares
app.use(express.json());
app.use('/api', userRoutes); 
// app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));