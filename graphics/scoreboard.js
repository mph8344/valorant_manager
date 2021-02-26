
const team1 = document.getElementById('leftText');
const team2 = document.getElementById('rightText');

const team1El = document.getElementById('leftOut');
const team2El = document.getElementById('rightOut');


nodecg.listenFor('EditTeam', (newVal) => {
	team1.innerHTML = newVal.team1Name;
	team2.innerHTML = newVal.team2Name;
	team1El.style.display = 'flex'
	team2El.style.display = 'flex'

	
	team1El.style.backgroundColor=newVal.team1Color;

	team2El.style.backgroundColor=newVal.team2Color;

	team2El.style.color=newVal.team2Font;

	team1El.style.color=newVal.team1Font;


})


const team1Box1 = document.getElementById('leftScore1');
const team1Box2 = document.getElementById('leftScore2');

const team2Box1 = document.getElementById('rightScore1');
const team2Box2 = document.getElementById('rightScore2');

nodecg.listenFor('ScoreTeams', (data) => {
	
	if (data.score1 == 0) {
		team1Box1.style.backgroundColor = "lightgrey";
		team1Box2.style.backgroundColor = "lightgrey";
	}

	if (data.score1 == 1) {
		team1Box1.style.backgroundColor = "red";
	}

	if (data.score1 > 1) {
		team1Box1.style.backgroundColor = "red";
		team1Box2.style.backgroundColor = "red";
	}
	
	//Team2

	if (data.score2 == 0) {
		team2Box1.style.backgroundColor = "lightgrey";
		team2Box2.style.backgroundColor = "lightgrey";
	}

	if (data.score2 == 1) {
		team2Box1.style.backgroundColor = "red";
	}

	if (data.score2 > 1) {
		team2Box1.style.backgroundColor = "red";
		team2Box2.style.backgroundColor = "red";
	}
	

})