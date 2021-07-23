const fs = require("fs");
const path= require('path');

module.exports= (app) => {
    app.get('/api/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '../db/db.json'))
    );
    app.get('/api/notes', (req, res) => res.JSON(data));
    

    app.post('/api/notes', (req, res) => {
        let newNote= req.body;
        let notesArray= [];
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            notesArray= JSON.parse(data);
            notesArray.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) => {
                err ? console.log(err) : console.log('created note :', notesArray)
            });
            res.send(notesArray);
        }) 
    })
}