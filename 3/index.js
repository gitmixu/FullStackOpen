const http = require('http') /* ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän moduulin. */

const app = http.createServer((request, response) => { /* luo http-moduulin metodilla createServer web-palvelimen, jolle se rekisteröi tapahtumankäsittelijän, joka suoritetaan jokaisen osoitteen http://localhost:3001 alle tulevan HTTP-pyynnön yhteydessä.*/
  response.writeHead(200, { 'Content-Type': 'text/plain' }) /* Pyyntöön vastataan statuskoodilla 200, asettamalla Content-Type-headerille arvo text/plain */
  response.end('Hello World') /* ja asettamalla palautettavan sivun sisällöksi merkkijono Hello World. */
})

/* Viimeiset rivit sitovat muuttujaan app sijoitetun http-palvelimen kuuntelemaan porttiin 3001 tulevia HTTP-pyyntöjä: */
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)