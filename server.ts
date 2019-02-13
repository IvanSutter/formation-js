import * as express from 'express';
import * as serveIndex from 'serve-index';

const app = express();

const www: string = 'www';

app.use(express.static(www));
app.use(serveIndex(www, { view: "details", icons: true }));

app.listen(3000, function () {
  console.log('HOHO Example app listening on port 3000!')
});
