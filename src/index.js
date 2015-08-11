import moment from 'moment';
import _ from 'lodash';

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

/**	@method _validateDate

 Shared utility to ensure a valid date is sent. If a bad date is sent, throw a warning and return the current date
 @private
 @param {Date | Object} dateObj Javascript date object or Ss.Timezone object
 @return {Date}
 */
const _validateDate = (dateObj) => {
	// Ss.Timezone.localDate returns an object - not a date - so extract the right field
	if (dateObj.utc && _.isDate(dateObj.utc)) {
		dateObj = dateObj.utc;
	}

	if (!_.isDate(dateObj)) {
		console.error(`Invalid date passed to dateTimeFormatter. (${dateObj})`);

		dateObj = new Date();
	}

	return dateObj;
};
/**
 @method dateTimeFormatter
 @private
 @param {Date} date
 @param {Object} options
 @return {String} Returns a formatted datetime string
 */
const dateTimeFormatter = (date, options = {}) => {
	date = _validateDate(date);

	return moment(date).format(options.pattern);
};

// 1/2/2015 (no leading zero)
const toMicroDate = (dateObj) => {
	return dateTimeFormatter(dateObj, { pattern: DATE_FORMATS.micro });
};

export { toMicroDate };