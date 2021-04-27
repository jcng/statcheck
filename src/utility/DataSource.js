// Central source for accessing data

// Default Export - Using static data for now, but will eventually replace with calls to API
var testDataRaw = require('../data/Lucian.json');
export default testDataRaw; // placeholder for now
// END Default Export

// fetchChampData() - API call to fetch champ data JSON
// TODO: Make dynamic -- should be able to pass in champ id and patch number as arguments
async function fetchChampData(champId) {
    try {
        let response = await fetch(`//ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion/${champId}.json`);
        let responseJson =  await response.json();
        return responseJson.data[Object.keys(responseJson.data)[0]];
    }
    catch (error) {
        console.error(error)
    }
}
export {fetchChampData}
//  END fetchChampData()

// fetchChampDataCDragon() - API call to fetch champ data JSON USING CDRAGON
// TODO: Make dynamic -- should be able to pass in champ id and patch number as arguments
async function fetchChampDataCDragon(champKey) {
    try {
        let response = await fetch(`//raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champKey}.json`);
        let responseJson =  await response.json();
        return responseJson;
    }
    catch (error) {
        console.error(error)
    }
}
export {fetchChampDataCDragon}
//  END fetchChampDataCDragon()


// champData - Detailed JSON for each champion
let champData = testDataRaw.data[Object.keys(testDataRaw.data)[0]]
export { champData }
// END champData

// getChampSplashSrc - Return full splash image asset URL for reach champion
function getChampSplashSrc(champId) {
    return `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`
}
export { getChampSplashSrc }
// END getChampSplashSrc