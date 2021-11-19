const getRace = async function(raceSeason, raceRound){
    let response = await fetch(`https://ergast.com/api/f1/${raceSeason}/${raceRound}.json`)
    let data = response.json()
    return data
}


const raceForm = document.getElementById('raceForm');

raceForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
   
    let raceSeason = e.target.raceSeason.value;
    let raceRound = e.target.raceRound.value;
    let raceSeasonRound = await getRace(raceSeason, raceRound);


    let populateLine1 = document.createElement('p1');
    populateLine1.innerHTML = `Season: ${raceSeasonRound.MRData.RaceTable.season} <br>`
   
    let populateLine2 = document.createElement('p1');
    populateLine2.innerHTML = `Round: ${raceSeasonRound.MRData.RaceTable.round} <br>`
    
    let populateLine3 = document.createElement('p1');
    populateLine3.innerHTML = `Race Name: ${raceSeasonRound.MRData.RaceTable.Races[0].raceName} <br>`
    
    let populateLine4 = document.createElement('p1');
    populateLine4.innerHTML = `Circuit Name: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.circuitName} <br>`
    
    let populateLine5 = document.createElement('p1');
    populateLine5.innerHTML = `City: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.locality} <br>`

    let populateLine6 = document.createElement('p1');
    populateLine6.innerHTML = `Country: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.country} <br>`

    let populateLine7 = document.createElement('p1');
    populateLine7.innerHTML = `Date: ${raceSeasonRound.MRData.RaceTable.Races[0].date} <br><br>`
    
    
    document.body.append(populateLine1);
    document.body.append(populateLine2);
    document.body.append(populateLine3);
    document.body.append(populateLine4);
    document.body.append(populateLine5);
    document.body.append(populateLine6);
    document.body.append(populateLine7);
})