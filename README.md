Date Formatter [![Build Status](https://travis-ci.org/tmcwilliam/date-formatter.svg?branch=master)](https://travis-ci.org/tmcwilliam/date-formatter)
=========

A small library that formats timestamps

## Installation

  `npm install @tmcwilliam/date-formatter`

## ES6 Usage

    import { toMicroDate } from '@tmcwilliam/date-formatter';

	const aug9 = new Date(1439096900000);
	const formattedDate = toMicroDate(aug9);

	console.log(formattedDate);
  
  
  Output should be `8/9/2015`


## Tests

  `npm test`