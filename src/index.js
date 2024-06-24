const express = require('express');
const app = express();
const port = 3000;

// Import user routes
const userRoutes = require('./routes/userRoutes.js');

// Middleware
app.use(express.json());

// Use user routes
app.get('/',(req,res)=>{
  res.send({msg:"hello"});
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
