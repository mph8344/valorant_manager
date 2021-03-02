
const team1Input = document.getElementById('team1Name')
const team2Input = document.getElementById('team2Name')
const team1Side = document.getElementById('leftSide')
const team2Side = document.getElementById('rightSide')




function update() {
	const data = {
		team1Name: team1Input.value,
        team1Side: team1Side.value,
		team2Name: team2Input.value, 
        team2Side: team2Side.value
	}
	nodecg.sendMessage('CreateTeams', data);
}

