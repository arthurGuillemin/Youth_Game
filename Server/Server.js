// server.js
const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./Routes/UserRoutes');


app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
