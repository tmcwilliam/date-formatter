'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qunitjs = require('qunitjs');

var _qunitjs2 = _interopRequireDefault(_qunitjs);

var _libIndex = require('../lib/index');

_qunitjs2['default'].module("Date/Time Formatter");

_qunitjs2['default'].test("Micro date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toMicroDate)(aug9), "8/9/2015");
});

_qunitjs2['default'].test("Tiny date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toTinyDate)(aug9), "08/09/2015");
});

_qunitjs2['default'].test("Shorter date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toShorterDate)(aug9), "Aug 9, 2015");
});

_qunitjs2['default'].test("Short date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toShortDate)(aug9), "Aug 09, 2015");
});

_qunitjs2['default'].test("MonthDay date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toMonthDayDate)(aug9), "Aug 09");
});

_qunitjs2['default'].test("Medium date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toMediumDate)(aug9), "Sun, Aug 09, 2015");
});

_qunitjs2['default'].test("Long date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toLongDate)(aug9), "August 09, 2015");
});

_qunitjs2['default'].test("Full date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toFullDate)(aug9), "Sunday, August 09, 2015");
});

_qunitjs2['default'].test("Datepicker date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toDatepicker)(aug9), "Aug 2015");
});

_qunitjs2['default'].test("MonthYear date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toMonthYearDate)(aug9), "August 2015");
});

_qunitjs2['default'].test("YearMonth date", function () {
	var aug9 = new Date(1439096900000);

	_qunitjs2['default'].equal((0, _libIndex.toYearMonthDate)(aug9), "2015-08-09");
});
