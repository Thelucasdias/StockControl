import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});

export default app;