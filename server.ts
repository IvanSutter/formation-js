import * as express from 'express';
import * as serveIndex from 'serve-index';
import { timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const app = express();
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
