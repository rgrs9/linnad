import './linnad.css';
import Linn from './Linn';
import londonPilt from './Pildid/london.jpg';

function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" pilt={londonPilt}/>
      <Linn name="London" riik="Inglismaa"/>
      <Linn name="Elva" riik="Eesti"/>
    </div>
  );
}

export default App;
