import logo from './logo.svg';
import './App.css';
import {MainContent} from './IlliaPage';
import MyCard from './CardInfo.jsx'
import IlliaPhoto from './images/illia-anime.jpg'

function App() {
  const myName = 'Your Name';
  const additionalInfo = 'Additional Information about you.';

  return (
      <div>
        <h1>My Profile Card</h1>
        <MyCard name={"Illia Dudchyk"} additionalInfo={"👨‍💻Developer"} photo={IlliaPhoto} />
      </div>
  );
}

export default App;
