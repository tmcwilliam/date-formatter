import { test } from 'tape'
import { 
	toMicroDate, toTinyDate, toShorterDate, toShortDate, toMonthDayDate,
	toMediumDate, toLongDate, toFullDate, toDatepicker, toMonthYearDate, toYearMonthDate 
} from './src/index';

const AUGUST_9_2015 = new Date(1439096900000)

test('Date Formatter', (assert) => {
	assert.equal(toMicroDate(AUGUST_9_2015), '8/9/2015')
	assert.equal(toTinyDate(AUGUST_9_2015), '08/09/2015')
	assert.equal(toShorterDate(AUGUST_9_2015), 'Aug 9, 2015')
	assert.equal(toShortDate(AUGUST_9_2015), 'Aug 09, 2015')
	assert.equal(toMonthDayDate(AUGUST_9_2015), 'Aug 09')
	assert.equal(toMediumDate(AUGUST_9_2015), 'Sun, Aug 09, 2015')
	assert.equal(toLongDate(AUGUST_9_2015), 'August 09, 2015')
	assert.equal(toFullDate(AUGUST_9_2015), 'Sunday, August 09, 2015')
	assert.equal(toDatepicker(AUGUST_9_2015), 'Aug 2015')
	assert.equal(toMonthYearDate(AUGUST_9_2015), 'August 2015')
	assert.equal(toYearMonthDate(AUGUST_9_2015), '2015-08-09')

	assert.end()
})