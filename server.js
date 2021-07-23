const express= require('express');
const path= require('path');
const fs= require('fs')
const PORT= 3000;
// processs.env.PORT || 3001;

const app= express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api/notes', (req, res) =>
        res.sendFile(path.join(__dirname, './db/db.json'))
    );
    app.get('/api/notes', (req, res) => res.JSON(data));
    

    app.post('/api/notes', (req, res) =>  {
        const noteDB= req.body;
        const notePar= JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
        
        notePar.push(noteDB);
        fs.writeFile('./db/db.json', JSON.stringify(notePar), (err) => {
            if (err) throw err;
        });
        res.json(notePar);
    });

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});