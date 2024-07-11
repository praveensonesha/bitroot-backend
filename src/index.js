const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); // Corrected import statement for CORS

// Import user routes
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const dashRoutes = require('./routes/dashRoutes.js');

// Middleware
app.use(express.json());
app.use(cors());


// Use user routes
app.get('/',(req,res)=>{
  res.send({msg:"hello"});
});

app.use('/api/users', userRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/dash',dashRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
