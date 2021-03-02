
const team1Rep = nodecg.Replicant('team1score', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2score', {defaultValue: 0});


function addTeam1() {
	if (team1Rep.value < 13) {
		team1Rep.value++;
	}
}

function subTeam1() {
	if (team1Rep.value > 0) {
		team1Rep.value--;
	}
	
}

function addTeam2() {
	if (team2Rep.value < 13) {
		team2Rep.value++;
	}
}

function subTeam2() {
	if (team2Rep.value > 0) {
		team2Rep.value--;
	}
	
}