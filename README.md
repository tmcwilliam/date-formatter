Date Formatter [![Build Status](https://travis-ci.org/tmcwilliam/date-formatter.svg?branch=master)](https://travis-ci.org/tmcwilliam/date-formatter)
=========

A small library that formats timestamps

## Installation

  `npm install @tmcwilliam/date-formatter`

## Usage

    var dateTimeFormatter = require('@tmcwilliam/date-formatter');

    var formattedDate = dateTimeFormatter(1439164800000, {pattern: "MM DD, YYYY"});
  
  
  Output should be `08 09, 2015`


## Tests

  `npm test`