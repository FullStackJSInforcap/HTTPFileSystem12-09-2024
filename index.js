// Rest service: Post - Delete - Put - Get
// Post - insertar
// Delete - eliminar
// Put - actualizar
// Get - seleccionar

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const parametros = req.query;
    res.json(parametros);
});

app.get('/nombre/:nombre/apellido/:apellido', (req, res) => {
    const parametros = req.params;
    res.json(parametros);
});

app.post('/', (req, res) => {
    const parametros = req.body;
    res.json(parametros);
});

app.put('/', (req, res) => {
    const { nombreNuevo, apellido } = req.body;
    res.json({
        nombreNuevo,
        apellido
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id });
});

app.delete('/', (req, res) => {
    const id = req.query.id;
    res.json({ id });
});

app.listen(3000, () => {
    console.log('iniciado');
});