var express = require('express');
var serveIndex = require('serve-index');
var app = express();
var www = 'www';
app.use(express.static(www));
app.use(serveIndex(www, { view: "details", icons: true }));
app.listen(3000, function () {
    console.log('HO js Example app listening on port 3000!');
});
