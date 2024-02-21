const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/public/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/listing/:id', (req, res) => {
  const { id } = req.params;
  // Aquí debes buscar en tus datos de anuncios (quizás en el archivo JSON) el anuncio con el ID proporcionado y devolverlo como respuesta
  const listing = listings.find(listing => listing.Id === parseInt(id));
  res.json(listing);
});