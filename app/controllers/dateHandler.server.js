'use strict';

function ClickHandler () {

	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	function createNaturalDate (date) {
		return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
	}

	this.getDateJson = function (req, res) {
		var dateParam = req.params.date;
		var parsedDate = Date.parse(dateParam);
		var result = { unix: null, natural: null };

		if (!isNaN(dateParam)) {
			result.unix = parseInt(dateParam);
			result.natural = createNaturalDate(new Date(parseInt(dateParam)));

		} else if ((parsedDate !== "Invalid Date") && (!isNaN(parsedDate))) {
			result.unix = parsedDate;
			result.natural = createNaturalDate(new Date(Date.parse(dateParam)));
		}

		res.json(result);

	};
}

module.exports = ClickHandler;