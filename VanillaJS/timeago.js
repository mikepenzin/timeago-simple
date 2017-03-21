var date_time = document.getElementsByClassName('timeago');

for(var i = 0; i < date_time.length; i++) {
   (function difference ( previousTime ) {
        var today = Date.now();
        previousTime = Date.parse(previousTime);
        var seconds = (today - previousTime) / 1000;
        var hours = parseInt( seconds / 3600 ); 
        seconds = seconds % 3600;
        var minutes = parseInt( seconds / 60 );
        if(minutes < 60 && hours === 0) {
            date_time[i].innerText = (minutes === 1 ? Math.round(minutes) + " minute ago" : Math.round(minutes) + " minutes ago");
        	return;
        }
        if(hours > 24){
            var days = hours / 24;
            if (days > 30) {
                var month = days / 30;
                if (month > 12) {
                    var years = month / 12;
                    if (years > 0) {
                        date_time[i].innerText = (years === 1 ? Math.ceil(years) + " year ago" : Math.ceil(years) + " years ago"); 
                        return;
                    }
                }
                date_time[i].innerText = (Math.round(month) + " month ago"); 
    	        return;
            }
            date_time[i].innerText = (days === 1 ? Math.round(days) + " day ago" : Math.round(days) + " days ago");
            return;
        }
        date_time[i].innerText = (hours === 1 ? Math.round(hours) + " hour ago" : Math.round(hours) + " hours ago");
        return;
    	
    })(date_time[i].innerText);
}