// before running this, make sure you `npm install node-fetch`.

const fs = require('fs');
const fetch = require('node-fetch');
const query = JSON.stringify({ "query": "query {stars {notes {text}} planets {notes {text}}}" });
const url = 'http://feltyrion.sarvva.moos.es/'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': query.length
  },
  body: query
};
fetch(url, options).then(res => res.json()).then(json => {
  const data = json.data;
  const notesTexts = [];
  const extract = entry => {
    entry.notes.forEach(note => {
      notesTexts.push(note.text.trim());
    })
  }
  data.stars.forEach(extract);
  data.planets.forEach(extract);

  fs.writeFileSync('./model_input/input.txt', notesTexts.join('\n'));
});
