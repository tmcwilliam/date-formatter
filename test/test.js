import QUnit from 'qunitjs';
import { toMicroDate } from '../lib/index';

QUnit.module("Date/Time Formatter");

QUnit.test("Micro date", function() {
	var aug9 = new Date(1439096900000);

	QUnit.equal(toMicroDate(aug9), "8/9/2015");
});