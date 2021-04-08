import './App.css';

// local JSON for testing purposes
var testDataRaw = require('./data/Lucian.json');
var testData = testDataRaw.data[Object.keys(testDataRaw.data)[0]]
console.log(testData);

var champSplash = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${testData.name}_0.jpg`

function App() {
  return (
    <div className="App">
      <div className="champ-hero-splash">
        <img src={champSplash}></img>
      </div>
      <h1 className="champ-title">{testData.id}</h1>
    </div>
  );
}

export default App;
