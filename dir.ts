import * as express from 'express';

const app = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`on est dans 'dir'`);
    next();
});

app.get('/date', (req, res, next) => {
    res.json({
        date: (new Date()).toLocaleString('ja-JP')
    });
});

app.get('/test', (req, res, next) => {
    console.log('testtttttttttttttttttttt');
});

app.get('/*', (req, res, next) => {
    console.log('oups');
});

app.post('/add', (req, res, next) => {
    console.log('POST add');
    const result = +req.body.a + +req.body.b;
    console.log(result);
    res.json({
        result: result
    });
});

export const dir = app;
