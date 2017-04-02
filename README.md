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

<script type="text/javascript" src="/dist/timeago.min.js" async></script>


<!-- Output:
Posted: 12 days ago

Posted: 16 hours ago

Posted: 13 years ago
-->
```