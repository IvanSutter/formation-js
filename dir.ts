import * as express from 'express';

const app = express.Router();

app.use((req, res, next) => {
    console.log(`on est dans 'dir'`);
    next();
});

app.get('/date', (req, res, next) => {
    res.json( {
        date: (new Date()).toLocaleString('ja-JP')
    });
});

app.get('/test', (req, res, next) => {
    console.log('testtttttttttttttttttttt');
});

app.get('/*', (req, res, next) => {
    console.log('oups');
});

export const dir = app;
