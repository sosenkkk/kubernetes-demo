const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// Start the server and listen on port 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
