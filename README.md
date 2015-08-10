Date Time Formatter
=========

A small library that formats datestamps and timestamps

## Installation

  `npm install @tmcwilliam/date-formatter`

## Usage

    var dateTimeFormatter = require('@tmcwilliam/date-formatter');

    var formattedDate = dateTimeFormatter(1439164800000, {pattern: "MM DD, YYYY"});
  
  
  Output should be `08 09, 2015`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.