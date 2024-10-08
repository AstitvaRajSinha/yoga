const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/userRoutes'); 

const dotenv = require('dotenv');
dotenv.config();


const connectDB = require('./config/database');
connectDB.connect();


//middlewares
app.use(cors());
app.use(express.json());


app.use('/api', userRoutes); 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));