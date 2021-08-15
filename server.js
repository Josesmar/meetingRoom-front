//Install express server
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(_dirname + './dist/client-room'));

app.get('/*', (req, res) =>
    res.sendFile(_dirname + 'dist/client-room/index.htmnl'),
);

// Start the app by listening on the default Heroku port
app.listen(PORT, ()=> {
app.log('Servidor iniciado na porta' + PORT);
})
