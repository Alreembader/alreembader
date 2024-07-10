const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// yes, the main is here before rebase 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});