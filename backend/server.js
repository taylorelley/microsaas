const express = require('express');
const app = express();

app.get('/api/generateGearList', (req, res) => {
  // Call ML model with trip data
  const gearList = []; 
  
  res.json(gearList);
});

app.listen(3000, () => {
  console.log('Server running'); 
});
