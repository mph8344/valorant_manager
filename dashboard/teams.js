
const team1Input = document.getElementById('team1Name')
const team2Input = document.getElementById('team2Name')
//const team1Side = document.getElementById('leftSide')
//const team2Side = document.getElementById('rightSide')

const team1Rep = nodecg.Replicant('team1Side', {defaultValue: 'DEF'});
const team2Rep = nodecg.Replicant('team2Side', {defaultValue: 'ATK'});



function update() {
	const data = {
		team1Name: team1Input.value,
        //team1Side: team1Side.value,
		team2Name: team2Input.value 
        //team2Side: team2Side.value
	}
	//team1Rep.value=team1Side.value;
	//team2Rep.value=team2Side.value;
	nodecg.sendMessage('CreateTeams', data);
}

function swapSides() {
	const temp = team1Rep.value;

	team1Rep.value = team2Rep.value;
	team2Rep.value = temp;

}

function reset() {
	team1Rep = nodecg.Replicant('team1Side', {defaultValue: 'DEF'});
	team1Rep.value = 'DEF'
	team2Rep = nodecg.Replicant('team2Side', {defaultValue: 'ATK'});
	team1Rep.value = 'ATK'
}