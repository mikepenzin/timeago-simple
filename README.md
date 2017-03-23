# timeago-simple
Timeago is a simple plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "1 day ago")

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
// (just for example)
```

## Bower & VanillaJS

Add via Bower:
```js
bower install timeago-simple --save
```

Add to HTML file (download source js file from VanillaJS folder):
```html
<script type="text/javascript" src="/dist/timeago.js"></script>
```

Usage:
```html
<div class="timeago">Tue Mar 21 2017 18:23:50 GMT+0000 (UTC)</div>

<!-- Output: 9 hours ago -->
```