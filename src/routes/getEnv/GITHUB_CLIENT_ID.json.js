export async function get(req, res, next) {
	const githubClientId = process.env.GITHUB_CLIENT_ID;
	var data = {
		"GITHUB_CLIENT_ID": githubClientId
	}

	if (data !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(data));
	} else {
		next();
	}
}