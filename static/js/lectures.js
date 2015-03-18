$(document).ready(function() {
    setNextLecture();
});

function setNextLecture() {
    var lectures = $("table.lectures tbody tr");
    for(var i = 0; i < lectures.length; i++) {
        var lecture = lectures[i];
        var lectureDate = moment(lecture.children[0].innerHTML).year(2015).hours(10);
        var now = moment();

        if(lectureDate.isAfter(now)) {
            $(lecture).addClass("next-lecture");
            $(".next-lecture-title").text(lecture.children[1].innerHTML);
            $(".next-lecture-date").text(lectureDate.format("dddd, MMMM Do") + " at 9:00 AM in Salomon 001.");
            break;
        }
    }
}