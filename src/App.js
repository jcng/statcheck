import './App.css';
import ChampStats from "./components/ChampStats"
import {championData} from "./utility/DataSource"

var champSplash = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.name}_0.jpg`

function App() {
  return (
    <div className="App">
      <div className="champ-hero-splash">
        <img src={champSplash}></img>
      </div>
      <h1 className="champ-title">{championData.id}, {championData.title}</h1>
      <div className="champ-stats-wrapper">
        <ChampStats stat="hp"></ChampStats>
        <ChampStats stat="hpperlevel"></ChampStats>
        <ChampStats stat="mp"></ChampStats>
        <ChampStats stat="mpperlevel"></ChampStats>
        <ChampStats stat="movespeed"></ChampStats>
        <ChampStats stat="armor"></ChampStats>
        <ChampStats stat="armorperlevel"></ChampStats>
        <ChampStats stat="spellblock"></ChampStats>
        <ChampStats stat="spellblockperlevel"></ChampStats>
        <ChampStats stat="attackrange"></ChampStats>
        <ChampStats stat="hpregen"></ChampStats>
        <ChampStats stat="hpregenperlevel"></ChampStats>
        <ChampStats stat="mpregenperlevel"></ChampStats>
        <ChampStats stat="crit"></ChampStats>
        <ChampStats stat="critperlevel"></ChampStats>
        <ChampStats stat="attackdamage"></ChampStats>
        <ChampStats stat="attackdamageperlevel"></ChampStats>
        <ChampStats stat="attackspeedperlevel"></ChampStats>
        <ChampStats stat="attackspeed"></ChampStats>
      </div>
    </div>
  );
}

export default App;
