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

Usage:
```html
<p>Posted: <span class="timeago">Tue Mar 21 2017 15:08:46 GMT+0000 (UTC)</span> by Mike </p>
<br>
<p>Posted: <span class="timeago">Tue Apr 2 2017</span> by Mike </p>
<br>
<p>Posted: <span class="timeago">Tue Apr 2 2012</span> by Mike </p>
<br>
<p>Posted: <span class="timeago">12/31/2004</span> by Mike </p>

<script type="text/javascript" src="/dist/timeago.min.js" async></script>


<!-- Output:
Posted: 12 days ago by Mike


Posted: 16 hours ago by Mike


Posted: 6 years ago by Mike


Posted: 13 years ago by Mike
-->
```