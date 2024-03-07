import './linnad.css';
import Linn from './Linn';
import londonPilt from './Pildid/london.jpg';
import pariisPilt from './Pildid/paris.png';
import berliinPilt from './Pildid/berlin.jpg'
import LinnadeLoetelu from './LinnadeLoetelu';


const pariis = {
  nimi: 'Pariis',
  riik: 'Prantsusmaa',
  pilt: pariisPilt
}

const linnad = [
  pariis,
  { nimi: 'London', riik: 'Inglismaa', pilt: londonPilt },
  { nimi: 'Berliin', riik: 'Saksamaa', pilt: berliinPilt }
]

/*
function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name={pariis.nimi} riik={pariis.riik} pilt={pariis.pilt}/>
      <Linn name="London" riik="Inglismaa" pilt={londonPilt}/>
      <Linn name="Elva" riik="Eesti"/>
    </div>
  );
}
*/


function App() {
  return (
    <div className='container'>
      <div>
        <hi>Linnade loetelu</hi>

      </div>
      <div>
        {linnad.map((linn) => {
          return (
            <Linn name={linn.nimi} riik={linn.riik} pilt={linn.pilt} />
          )
        })}
      </div>
    </div>

  )
}
export default App;
