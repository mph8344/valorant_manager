
const color1 = document.getElementById('team1Color')
const color2 = document.getElementById('team2Color')

const font1 = document.getElementById('team1Font')
const font2 = document.getElementById('team2Font')

const team1Input = document.getElementById('team1Name')
const team2Input = document.getElementById('team2Name')

const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});


function update() {
	const data = {
		team1Name: team1Input.value, 
		team2Name: team2Input.value, 
		team1Color: color1.value,
		team2Color: color2.value,
		team1Font: font1.value,
		team2Font: font2.value

	}
	nodecg.sendMessage('EditTeam', data);
}