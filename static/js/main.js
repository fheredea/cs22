$(document).ready(function() {
    setHoursStatus();
});

function setHoursStatus() {
    getEarliestEvent(function(earliestEvent){
        var startTime = new Date(earliestEvent.start.dateTime);

        if(startTime > new Date()) {
            console.log("No current event.");
        } else {
            var current = earliestEvent;
            var title = current.summary.toLowerCase();
            if(title.indexOf("hour") >= 0 || title.indexOf("clinic") >= 0) {
                $(".status").addClass("online");
            }
        }
    })
}

function getEarliestEvent(callback) {
    // Set up Google Calendar API
    var key = 'AIzaSyCzb4iJWntilVH074FIQC0B_Jbs0h5aDp0';
    var calendarID = 'brown.edu_1uo18g3jf1l9likqugj45e4s5g@group.calendar.google.com';

    // Load Calendar JSON
    $.ajax({
        type: 'GET',
        url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarID + '/events?key=' + key + '&timeMin=' + (new Date()).toISOString() + '&maxResults=1&singleEvents=true&orderBy=startTime'),
        dataType: 'json',
        success: function (response) {
            callback(response.items[0]);
        },
        error: function (response) {
            console.log("An error occurred:", response);
        }
    });
}