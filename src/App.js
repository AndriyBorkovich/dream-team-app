
import './App.css';
import MyCard from './CardInfo.jsx'
import imageUrl from './images/andrii.jpg'
import IlliaPhoto from './images/illia-anime.jpg'
import NastiaPhoto from './images/nastia.jpg'

function App() {
  return (
      <div className="container">
          <h1>Our dream team</h1>
          <div className="card-container">
              <MyCard name={'Andrii Borkovych'} additionalInfo={'UI/UX designer'} imageUrl={imageUrl} />
              <MyCard name={"Illia Dudchyk"} additionalInfo={"👨‍💻Developer"} imageUrl={IlliaPhoto} />
              <MyCard name={'Anastasiia Bilovus'} additionalInfo={'Project manager'} imageUrl={NastiaPhoto}/>
              <MyCard name={''} additionalInfo={''} imageUrl={''}/>
          </div>
      </div>
  );
}

export default App;
