import QUnit from 'qunitjs';
import { dateTimeFormatter } from '../lib/index';

QUnit.module("Date/Time Formatter");

QUnit.test("Date/Time Formatter", function() {
	QUnit.equal(
		dateTimeFormatter(1439164800000, {pattern: "MM DD, YYYY"}), 
		"08 09, 2015",
		"correct date format"
	);
});