import QUnit from 'qunitjs';
import { toMicroDate } from '../lib/index';

QUnit.module("Date/Time Formatter");

QUnit.test("Micro date", function() {
	QUnit.equal(toMicroDate(1439096900000), "8/10/2015");
});