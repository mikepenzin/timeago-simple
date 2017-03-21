exports.simple = function(timeData) {
    var today = Date.now();
    timeData = Date.parse(timeData);
    var seconds = (today - timeData) / 1000;
    var hours = parseInt( seconds / 3600 ); 
    seconds = seconds % 3600;
    var minutes = parseInt( seconds / 60 );
    if(minutes < 60 && hours === 0) {
    	return(minutes === 1 ? Math.round(minutes) + " minute ago" : Math.round(minutes) + " minutes ago");
    }
    if(hours > 24){
        var days = hours / 24;
        if (days > 30) {
            var month = days / 30;
            if (month > 12) {
                var years = month / 12;
                if (years > 0) {
                    return(years === 1 ? Math.ceil(years) + " year ago" : Math.ceil(years) + " years ago");
                }
            }
	        return(Math.round(month) + " month ago");
        }
        return(days === 1 ? Math.round(days) + " day ago" : Math.round(days) + " days ago");
    }
    return(hours === 1 ? Math.round(hours) + " hour ago" : Math.round(hours) + " hours ago");
	
};