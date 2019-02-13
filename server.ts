import * as express from 'express';
import * as serveIndex from 'serve-index';
import { timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ejs from 'ejs';
//import * as fs from 'fs';
import * as path from 'path';

import { promises as fsp } from 'fs';
import { async } from 'rxjs/internal/scheduler/async';

import { dir } from './dir';

const app = express();
const context = {
  titi: 'toto'
};

app.set('views', './tmpl');
app.set('view engine', 'ejs');

app.use('/dir', dir);

const o = timer(2000).pipe(
  map(x => x)
);

o.subscribe(str => console.log('coucou', str));

const www: string = 'www';

app.use(express.static(www));
app.use(serveIndex(www, { view: "details", icons: true }));
app.use(async (req, res, next) => {
  const fileName = path.resolve(__dirname, './tmpl/' + req.url + '.ejs')
  try {
    await fsp.access(fileName);
    res.render(fileName, context);
    console.log('ça tourne !!!');
  } catch (app) {
    next();
  }
});

app.use((req, res, next) => {
  console.log('url not found', req.url);
});

app.listen(3000, function () {
  console.log('HOHO TS Example app listening on port 3000!')
});

let ejs = require('ejs'),
  people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= people.join(", "); %>', { people: people });