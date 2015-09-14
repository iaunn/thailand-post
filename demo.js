"use strict";

var TrackService = require('./');

new TrackService().init(function(err, serv) {
	serv.getItem("EN331755897TH", function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.getCountries(function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.getServices(function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.getRates("TH", 30, function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.getRatesByService("1", "TH", 120, function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.getAllLocations(function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	serv.searchLocation("คลอง", function(err, result) {
		if (err) {
			return console.log(err);
		}

		console.log(result);
	});

	// serv.getClosestLocation("13.11143", "101.154250", function(err, result) {
	// 	if (err) {
	// 		return console.log(err);
	// 	}

	// 	console.log(result);
	// });
});