import moment from 'moment';

const dateTimeFormatter = (date, pattern) => {
	return moment(date).format(pattern);
};

// 1/2/2015 (no leading zero)
export function toMicroDate(date) {
	return dateTimeFormatter(date, 'M/D/YYYY');
}

// 11/24/2011, 01/02/2015
export function toTinyDate(date) {
	return dateTimeFormatter(date, 'MM/DD/YYYY');
}

// Nov 4, 2011
export function toShorterDate(date) {
	return dateTimeFormatter(date, 'MMM D, YYYY');
}

// Nov 04, 2011
export function toShortDate(date) {
	return dateTimeFormatter(date, 'MMM DD, YYYY');
}

// Aug 25
export function toMonthDayDate(date) {
	return dateTimeFormatter(date, 'MMM DD');
}

// Thu, Nov 24, 2011
export function toMediumDate(date) {
	return dateTimeFormatter(date, 'ddd, MMM DD, YYYY');
}

// November 24, 2011
export function toLongDate(date) {
	return dateTimeFormatter(date, 'MMMM DD, YYYY');
}

// Thursday, November 24, 2011
export function toFullDate(date) {
	return dateTimeFormatter(date, 'dddd, MMMM DD, YYYY');
}

// Nov 2011
export function toDatepicker(date) {
	return dateTimeFormatter(date, 'MMM YYYY');
}

// November 2011
export function toMonthYearDate(date) {
	return dateTimeFormatter(date, 'MMMM YYYY');
}

// 2011-11-24 (for the datetime attribute of a <time> element)
export function toYearMonthDate(date) {
	return dateTimeFormatter(date, 'YYYY-MM-DD');
}