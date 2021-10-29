// API info stored in .env
const key = process.env.PETFINDER_API_KEY
const secret = process.env.PETFINDER_API_SECRET


// sample search parameters for testing
var org = 'RI77';
var status = 'adoptable';


// Attempt at a backend fetch. It's not throwing errors, but it's also not working
const petData = (req, res) => {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (res) {

	// Return the response as JSON
	return res.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (res) {

	// Return the API response as JSON
	return res.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
}

module.exports = {
    petData
}