import moment from 'moment';

const DATE_FORMATS = {
	'micro': 'M/D/YYYY',
	'tiny': 'MM/DD/YYYY',
	'short': 'MMM DD, YYYY',
	'shorter': 'MMM D, YYYY',
	'medium': 'ddd, MMM DD, YYYY',
	'long': 'MMMM DD, YYYY',
	'full': 'dddd, MMMM DD, YYYY',
	'picker': 'MMM YYYY',
	'monthday': 'MMM DD',
	'monthyear': 'MMMM YYYY',
	'jqTiny': 'mm/dd/yy',
	'dayofweek': 'dddd',
	'year': 'YYYY'
};

/**	@method validate
 * 
 @private
 @param {Date} - Javascript date object
 @return {Date}
 */
const validate = (date) => {
	if (!(date instanceof Date)) {
		return `Invalid date passed to dateTimeFormatter. (${date})`;

		date = new Date();
	}

	return date;
};
/**
 @method dateTimeFormatter
 @private
 @param {Date} date
 @param {String} pattern
 @return {String} Returns a formatted datetime string
 */
const dateTimeFormatter = (date, pattern) => {
	date = validate(date);

	return moment(date).format(pattern);
};

// 1/2/2015 (no leading zero)
const toMicroDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.micro);
};

// 11/24/2011, 01/02/2015
const toTinyDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.tiny);
};

// Nov 4, 2011
const toShorterDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.shorter);
};

// Nov 04, 2011
const toShortDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS['short']);
};

// Aug 25
const toMonthDayDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.monthday);
};

// Thu, Nov 24, 2011
const toMediumDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.medium);
};

// November 24, 2011
const toLongDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS['long']);
};

// Thursday, November 24, 2011
const toFullDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.full);
};

// Nov 2011
const toDatepicker = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.picker);
};

// November 2011
const toMonthYearDate = (dateObj) => {
	return dateTimeFormatter(dateObj, DATE_FORMATS.monthyear);
};

// 2011-11-24 (for the datetime attribute of a <time> element)
const toYearMonthDate = (dateObj) => {
	return dateTimeFormatter(dateObj, 'YYYY-MM-DD');
};

export { 
	toMicroDate, 
	toTinyDate,
	toShorterDate,
	toShortDate,
	toMonthDayDate,
	toMediumDate,
	toLongDate,
	toFullDate,
	toDatepicker,
	toMonthYearDate,
	toYearMonthDate
};