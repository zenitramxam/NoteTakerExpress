const express= require('express');
const path= require('path');
const PORT= 3000;
// processs.env.PORT || 3001;

const app= express();

require('./routes/apiRoutes')(app)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});