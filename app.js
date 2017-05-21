const path = require('path');
const express = require('express')
const app = express()
const port = process.env.PORT || "3000";

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!')
});
