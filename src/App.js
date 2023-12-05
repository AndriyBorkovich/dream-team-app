
import './App.css';
import MyCard from './CardInfo.jsx'
import IlliaPhoto from './images/illia-anime.jpg'

function App() {

  return (
      <div>
        <h1>Our dream team</h1>
        <MyCard name={"Illia Dudchyk"} additionalInfo={"👨‍💻Developer"} imageUrl={IlliaPhoto} />
      </div>
  );
}

export default App;
