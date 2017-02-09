Date Formatter [![Build Status](https://travis-ci.org/tmcwilliam/date-formatter.svg?branch=master)](https://travis-ci.org/tmcwilliam/date-formatter)
=========

Convience methods for Date formatting

## Installation

```js
npm install @tmcwilliam/date-formatter
```

## Methods

### toMicroDate
```js
toMicroDate(new Date(1439096900000));
// 8/9/2015
```
### toTinyDate
```js
toTinyDate(new Date(1439096900000));
// 08/09/2015
```
### toShorterDate
```js
toShorterDate(new Date(1439096900000));
// Aug 9, 2015
```
### toShortDate
```js
toShortDate(new Date(1439096900000));
// Aug 09, 2015
```
### toMonthDayDate
```js
toMonthDayDate(new Date(1439096900000));
// Aug 09
```
### toMediumDate
```js
toMediumDate(new Date(1439096900000));
// Sun, Aug 09, 2015
```
### toLongDate
```js
toLongDate(new Date(1439096900000));
// August 09, 2015
```
### toFullDate
```js
toFullDate(new Date(1439096900000));
// Sunday, August 09, 2015
```
### toDatepicker
```js
toDatepicker(new Date(1439096900000));
// Aug 2015
```
### toMonthYearDate
```js
toMonthYearDate(new Date(1439096900000));
// August 2015
```
### toYearMonthDate
```js
toYearMonthDate(new Date(1439096900000));
// 2015-08-09
```