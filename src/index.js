import moment from 'moment';

/**
 @method dateTimeFormatter
 @private
 @param {Date} date
 @param {Object} options
 @return {String} Returns a formatted datetime string
 */
const dateTimeFormatter = (date, options = {}) => {
	return moment(date).format(options.pattern);
};

export { dateTimeFormatter };