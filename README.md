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
```

## Bower (plain JavaScript)

Add via Bower:
```js
bower install timeago-simple --save
```

Usage:
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
```

Troubleshooting:

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

timeago-simple: Please check date and time format! Unable to parse the date & time.

-->
```

## Release Notes

#### v.1.1.0

- Added troubleshooting for wrong date format.