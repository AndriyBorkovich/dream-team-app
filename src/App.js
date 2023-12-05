import logo from './logo.svg';
import './App.css';
import MyCard from './CardInfo.jsx'

function App() {
  const myName = 'Your Name';
  const additionalInfo = 'Additional Information about you.';

  return (
      <div>
        <h1>My Profile Card</h1>
        <MyCard name={myName} additionalInfo={additionalInfo} />
      </div>
  );
}

export default App;
