function howManyDaysBetweenTwoDates(date1, date2) {
	return Math.floor(((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
}

module.exports = howManyDaysBetweenTwoDates;