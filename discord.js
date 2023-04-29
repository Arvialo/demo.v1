function sendMessage() {
	var XMLHttpRequest = require("xhr2");

	const request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://discord.com/api/webhooks/1101924781600800798/DSYatMWtwVaSKXxuycgtrYn2FYVM4AFzQgZ9Q9xgU8CCh2R_9qKQ1VaEFGX0i9L_ghpc"
	);

	request.setRequestHeader("Content-type", "application/json");

	const params = {
		avatar_url: "",
		content:
			"**" +
			require("os").userInfo().username +
			"** started an instance of the project",
	};

	request.send(JSON.stringify(params));
}

sendMessage();
