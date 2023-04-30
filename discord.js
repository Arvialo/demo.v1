function sendMessage() {
	const opt = process.argv[2];
	var XMLHttpRequest = require("xhr2");

	const request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://discord.com/api/webhooks/1101924781600800798/DSYatMWtwVaSKXxuycgtrYn2FYVM4AFzQgZ9Q9xgU8CCh2R_9qKQ1VaEFGX0i9L_ghpc"
	);

	request.setRequestHeader("Content-type", "application/json");
	const user = require("os").userInfo().username;
	const params = {
		avatar_url: "",
		content:
			opt == 1
				? "*:green_circle:\t**" +
				  user +
				  "** starts working on the project.*"
				: "*:red_circle:\t**" +
				  user +
				  "** stops working on the project.*",
	};

	request.send(JSON.stringify(params));
}

sendMessage();
