const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// I am comment, you should to pull me
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// yes, the main is here before rebase, alreem
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
