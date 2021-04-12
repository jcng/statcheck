import './App.css';
import {champData, fetchChampData} from "./utility/DataSource"
import ChampStats from "./components/ChampStats"
import ChampSplash from "./components/ChampSplash"


function App() {
  return (
    <div className="App">
      <ChampSplash></ChampSplash>
      <h1 className="champ-title">{champData.id}, {champData.title}</h1>
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
