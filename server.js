const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/tarekrida'));
app.listen(process.env.PORT || 2222);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/tarekrida/index.html'));
});
