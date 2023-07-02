import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

/* Promise siis edustaa asynkronista operaatiota. Promise voi olla kolmessa eri tilassa:

Aluksi promise on pending, eli promisea vastaava asynkroninen operaatio ei ole vielä tapahtunut.
Jos operaatio päättyy onnistuneesti, promise menee tilaan fulfilled, josta joskus käytetään myös nimitystä resolved.
Kolmas mahdollinen tila on rejected, ja se edustaa epäonnistunutta operaatiota. */

/* JavaScriptin suoritusympäristö kutsuu then-metodin avulla rekisteröityä takaisinkutsufunktiota antaen sille parametriksi olion response, 
joka sisältää kaiken oleellisen HTTP GET ‑pyynnön vastaukseen liittyvän, eli palautetun datan, statuskoodin ja headerit. 


axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})
*/