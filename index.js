var timeago = function(){};

timeago.prototype.simple = function(timeData) {
    // today date and time in milliseconds 
    var today = Date.now();

    //We will perform some test - if there is error, we will throw error to console and exit, no change will be on the data.
    try {
        // We need to check if we able to parse the Date (if the result is NaN, this is an issue)
        if(Date.parse(timeData) !== Date.parse(timeData)) throw "timeago-simple: Please check date and time format! Unable to parse the date & time.";
    }
    catch(err) {
        console.error(err);
        return (timeData);
    }
  
    // parsing post date and time into milliseconds format
    timeData = Date.parse(timeData);
    var seconds = (today - timeData) / 1000;
    var minutes = (seconds / 60);
    var hours = (seconds / 3600);
    /* istanbul ignore if */
    if(minutes < 60 && hours === 0) {
    	return (minutes === 1 ? Math.round(minutes) + " minute ago" : Math.round(minutes) + " minutes ago");
    }
    /* istanbul ignore else */
    /* istanbul ignore if */
    if(hours > 24){
        var days = hours / 24;
        /* istanbul ignore else */
        /* istanbul ignore if */
        if (days > 30) {
            var month = days / 30;
            /* istanbul ignore if */
            if (month > 12) {
                var years = month / 12;
                /* istanbul ignore else */
                /* istanbul ignore if */
                if (years > 0) {
                    return (years === 1 ? Math.ceil(years) + " year ago" : Math.ceil(years) + " years ago");
                }
            }
            /* istanbul ignore else */
	        return (Math.round(month) + " month ago");
        }
        /* istanbul ignore else */
        return (days === 1 ? Math.round(days) + " day ago" : Math.round(days) + " days ago");
    }
    /* istanbul ignore else */
    return (hours === 1 ? Math.round(hours) + " hour ago" : Math.round(hours) + " hours ago");
};

module.exports = new timeago();