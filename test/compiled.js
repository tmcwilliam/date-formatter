'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qunitjs = require('qunitjs');

var _qunitjs2 = _interopRequireDefault(_qunitjs);

var _libIndex = require('../lib/index');

_qunitjs2['default'].module("Date/Time Formatter");

_qunitjs2['default'].test("Date/Time Formatter", function () {
	_qunitjs2['default'].equal((0, _libIndex.dateTimeFormatter)(1439164800000, { pattern: "MM DD, YYYY" }), "08 09, 2015", "correct date format");
});
