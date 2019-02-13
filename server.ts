import * as express from 'express';
import * as serveIndex from 'serve-index';
import { timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

//import { promises as fs } from 'fs';

const app = express();
const context = {
  titi: 'toto'
};

app.set('views', './tmpl');
app.set('view engine', 'ejs');
app.get('**', function (req, res, next) {
  const fileName = path.resolve(__dirname, './tmpl/' + req.url + '.ejs')
  if (fs.existsSync(fileName)) {
    res.render(fileName, context);
    return;
  }
  next();
});

const o = timer(2000).pipe(
  map(x => x)
);

o.subscribe(str => console.log('coucou', str));

const www: string = 'www';

app.use(express.static(www));
app.use(serveIndex(www, { view: "details", icons: true }));

app.listen(3000, function () {
  console.log('HOHO TS Example app listening on port 3000!')
});

let ejs = require('ejs'),
  people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= people.join(", "); %>', { people: people });