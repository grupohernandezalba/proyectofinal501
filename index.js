const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs'); 

const inicioRoute = require('./routes/inicioRoute');
const productosRoute = require('./routes/productosRoute');
const contactoRoute = require('./routes/contactoRoute');
const serviciosRoute = require('./routes/serviciosRoute');

app.use('/', inicioRoute);
app.use('/productos', productosRoute);
app.use('/contacto', contactoRoute);
app.use('/servicios', serviciosRoute);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});