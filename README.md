# timeago-simple 
[![npm](https://img.shields.io/npm/v/timeago-simple.svg?style=flat-square)]() [![npm](https://img.shields.io/npm/dt/timeago-simple.svg?style=flat-square)]() [![npm](https://img.shields.io/npm/l/timeago-simple.svg?style=flat-square)]() [![Travis](https://img.shields.io/travis/mikepenzin/timeago-simple.svg?style=flat-square)]() [![Coveralls](https://img.shields.io/coveralls/mikepenzin/timeago-simple.svg?style=flat-square)]()

Timeago is a simple plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "1 day ago")

[![NPM](https://nodei.co/npm/timeago-simple.png?downloads=true)](https://nodei.co/npm/timeago-simple/) 

## NodeJS Plugin
Install:

```js
npm install timeago-simple --save
```

Usage:

```js
var timeago = require("timeago-simple");


var timeStamp = 'Tue Mar 21 2017 15:08:46 GMT+0000 (UTC)';

var newTime = timeago.simple(timeStamp);

// 9 hours ago


var futureTimeStamp = 'Tue Mar 21 2019 15:08:46 GMT+0000 (UTC)';

var newFutureTime = timeago.simple(futureTimeStamp);

// in 2 years

```

## Bower (plain JavaScript)

Add via Bower:
```js
bower install timeago-simple --save
```

Add via CDN:
```html
<!--Full version-->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/timeago-simple@1.2.4/dist/timeago.js" async></script>

<!--Minified version-->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/timeago-simple@1.2.4/dist/timeago.min.js" async></script>

```
#### Directory for legasy versions
https://cdn.jsdelivr.net/npm/timeago-simple@1.2.2/


#### Usage:
```html
<p>Posted: <span class="timeago">Tue Mar 21 2017 15:08:46 GMT+0000 (UTC)</span></p>

<p>Posted: <span class="timeago">Tue Apr 2 2017</span></p>

<p>Posted: <span class="timeago">12/31/2004</span></p>

<p>Posted: <span class="timeago">2017/03/31</span></p>

<script type="text/javascript" src="/dist/timeago.min.js" async></script>

<!-- Output:
Posted: 12 days ago

Posted: 16 hours ago

Posted: 13 years ago

Posted: 8 days ago
-->


<p>Will be ready <span class="timeago">Tue Mar 21 2020 15:08:46 GMT+0000 (UTC)</span></p>

<p>Will be ready <span class="timeago">06/31/2017</span></p>

<script type="text/javascript" src="/dist/timeago.min.js" async></script>

<!-- Output:

Will be ready in 3 years

Will be ready in 2 month

-->

```

#### Troubleshooting:

If we unable to parse the date and time error message will throw in console and original data will display

```html
<p>Posted: <span class="timeago">31/12/2004</span></p>

<p>Posted: <span class="timeago">4366325635463456</span></p>

<p>Posted: <span class="timeago">zcbdsdewea</span></p>

<script type="text/javascript" src="/dist/timeago.min.js" async></script>

<!-- Output:

Posted: 31/12/2004

Posted: 4366325635463456

Posted: zcbdsdewea

-->

<!-- Console Output:

timeago-simple: Please check date and time format! Unable to parse the date & time: 31/12/2004

timeago-simple: Please check date and time format! Unable to parse the date & time: 4366325635463456

timeago-simple: Please check date and time format! Unable to parse the date & time: zcbdsdewea

-->

```

## Tests

  `npm run cover`
  
  
## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. Lint and test your code. 

  
## Release Notes

#### v.1.2.4

- Merged past and future time calculation. 
- Depricated future calculation, use only simple function call.

#### v.1.2.3

- Add CDN links

#### v.1.2.2

- Add functionality for "future" date calculation.

#### v.1.1.1

- Add troubleshooting for wrong date format.

#### v.1.1.2

- Add seconds display functionality.