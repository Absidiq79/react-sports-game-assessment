import logo from './logo.svg';
import './App.css';
import Game from '../src/Components/game/Game.js';

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: './assets/images/HP_fc.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './assets/images/Kv_fc.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: './assets/images/Thunder_fc.jpg'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: './assets/images/VerticalWording_BLACK.jpg'
  }

  return (
    <div className="App">
      <Game
        venue="Attouga Stadium"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="KamboEagles Stadium"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
