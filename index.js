const express = require("express");
const app = express();

app.get('/', (req, res) => {

  res.send('Server Working');
});

require('./Musicbot/musicbot.js')(app);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
