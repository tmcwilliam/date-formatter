'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qunitjs = require('qunitjs');

var _qunitjs2 = _interopRequireDefault(_qunitjs);

var _libIndex = require('../lib/index');

_qunitjs2['default'].module("Date/Time Formatter");

_qunitjs2['default'].test("Micro date", function () {
	_qunitjs2['default'].equal((0, _libIndex.toMicroDate)(1439096900000), "8/10/2015");
});
