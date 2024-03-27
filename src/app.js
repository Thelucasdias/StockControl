import express from 'express';

const routes = express();

routes.get('/', (req, res) => {
    res.send('welcome to stock control system!')
});

routes.post('/users', (req, res) => {

})

export default routes;