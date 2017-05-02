var timeago = function(){};

timeago.prototype.simple = function(timeData) {
    // today date and time in milliseconds 
    var today = Date.now();

    //We will perform some test - if there is error, we will throw error to console and exit, no change will be on the data.
    try {
        // We need to check if we able to parse the Date (if the result is NaN, this is an issue)
        if(Date.parse(timeData) !== Date.parse(timeData)) throw "timeago-simple: Please check date and time format! Unable to parse the date & time: " + timeData;
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
    if(seconds < 60 && minutes < 1) {
        return (seconds === 1 ? Math.round(seconds) + " second ago" : Math.round(seconds) + " seconds ago");
    }
    /* istanbul ignore if */
    if(minutes < 60 && hours < 1) {
    	return (minutes === 1 ? Math.round(minutes) + " minute ago" : Math.round(minutes) + " minutes ago");
    }
    /* istanbul ignore if */
    if(hours > 24){
        var days = hours / 24;
        if (days > 30) {
            var month = days / 30;
            if (month > 12) {
                var years = month / 12;
                if (years > 0) {
                    return (years === 1 ? Math.ceil(years) + " year ago" : Math.ceil(years) + " years ago");
                }
            }
	        return (Math.round(month) + " month ago");
        }
        return (days === 1 ? Math.round(days) + " day ago" : Math.round(days) + " days ago");
    }
    return (hours === 1 ? Math.round(hours) + " hour ago" : Math.round(hours) + " hours ago");
};

// Future calculation
timeago.prototype.future = function(timeData) {
    // today date and time in milliseconds 
    var today = Date.now();

    //We will perform some test - if there is error, we will throw error to console and exit, no change will be on the data.
    try {
        // We need to check if we able to parse the Date (if the result is NaN, this is an issue)
        if(Date.parse(timeData) !== Date.parse(timeData)) throw "timeago-simple: Please check date and time format! Unable to parse the date & time: " + timeData;
        // Need to check if it's really future date to parse
        if((Date.parse(timeData) - today) < 0) throw "timeago-simple: Looks like it's more relevant case for timeago.simple"; 
    }
    catch(err) {
        console.error(err);
        return (timeData);
    }
  
    // parsing post date and time into milliseconds format
    timeData = Date.parse(timeData);
    var seconds = (timeData - today) / 1000;
    var minutes = (seconds / 60);
    var hours = (seconds / 3600);
    /* istanbul ignore if */
    if(seconds < 60 && minutes < 1) {
        return (seconds === 1 ? "in " + Math.round(seconds) + " second" : "in " + Math.round(seconds) + " seconds");
    }
    /* istanbul ignore if */
    if(minutes < 60 && hours < 1) {
    	return (minutes === 1 ? "in " + Math.round(minutes) + " minute" : "in " + Math.round(minutes) + " minutes");
    }
    /* istanbul ignore if */
    if(hours > 24){
        var days = hours / 24;
        if (days > 30) {
            var month = days / 30;
            if (month > 12) {
                var years = month / 12;
                if (years > 0) {
                    return (years === 1 ? "in " + Math.ceil(years) + " year" : "in " + Math.ceil(years) + " years");
                }
            }
	        return ("in " + Math.round(month) + " month");
        }
        return (days === 1 ? "in " + Math.round(days) + " day" : "in " + Math.round(days) + " days");
    }
    return (hours === 1 ? "in " + Math.round(hours) + " hour" : "in " + Math.round(hours) + " hours");
};


module.exports = new timeago();