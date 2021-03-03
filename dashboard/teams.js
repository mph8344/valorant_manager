
const team1Input = document.getElementById('team1Name')
const team2Input = document.getElementById('team2Name')
//const team1Side = document.getElementById('leftSide')
//const team2Side = document.getElementById('rightSide')

const team1Rep = nodecg.Replicant('team1Side', {defaultValue: 'DEF'});
const team2Rep = nodecg.Replicant('team2Side', {defaultValue: 'ATK'});



function update() {
	const data = {
		team1Name: team1Input.value,
		team2Name: team2Input.value 
	}
	nodecg.sendMessage('CreateTeams', data);
}

function swapSides() {

	NodeCG.waitForReplicants(team1Rep, team2Rep).then(() => {

		const temp = team1Rep.value;

		team1Rep.value = team2Rep.value;
		team2Rep.value = temp;
	});

}

function reset() {

	NodeCG.waitForReplicants(team1Rep, team2Rep).then(() => {

		team1Rep.value = 'DEF'
		team2Rep.value = 'ATK'

	});
}