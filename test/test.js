import QUnit from 'qunitjs';
import { 
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
} from '../lib/index';

QUnit.module("Date/Time Formatter");

QUnit.test("Micro date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toMicroDate(aug9), "8/9/2015");
});

QUnit.test("Tiny date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toTinyDate(aug9), "08/09/2015");
});

QUnit.test("Shorter date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toShorterDate(aug9), "Aug 9, 2015");
});

QUnit.test("Short date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toShortDate(aug9), "Aug 09, 2015");
});

QUnit.test("MonthDay date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toMonthDayDate(aug9), "Aug 09");
});

QUnit.test("Medium date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toMediumDate(aug9), "Sun, Aug 09, 2015");
});

QUnit.test("Long date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toLongDate(aug9), "August 09, 2015");
});

QUnit.test("Full date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toFullDate(aug9), "Sunday, August 09, 2015");
});

QUnit.test("Datepicker date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toDatepicker(aug9), "Aug 2015");
});

QUnit.test("MonthYear date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toMonthYearDate(aug9), "August 2015");
});

QUnit.test("YearMonth date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toYearMonthDate(aug9), "2015-08-09");
});