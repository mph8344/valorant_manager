const nameInput = document.getElementById('name')
const twitterInput = document.getElementById('twitter')

function update() {
	console.log('test');
	const data = {name: nameInput.value, twitter: twitterInput.value}
	nodecg.sendMessage('showLowerthird', data);
}

function hideThird() {
	console.log('close');
	nodecg.sendMessage('hideLowerThird');
}