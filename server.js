const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const server = app.listen(PORT, (req, res) => {
    console.log(`Server Running in Port ${PORT} ....`);
})
const folderToUse = 'build'
app.use(express.static(folderToUse));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, folderToUse, 'index.html'));
});