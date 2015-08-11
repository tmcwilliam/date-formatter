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
