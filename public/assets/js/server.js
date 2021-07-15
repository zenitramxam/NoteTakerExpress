const express= require('express');
const path= require('path');
const fs= require('fs');

const PORT= 3000;
const app= express();



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`);
});