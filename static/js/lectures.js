$(document).ready(function() {
    setNextLecture();
    setPageLinks();
});

function setNextLecture() {
    var lectures = $("table.lectures tbody tr");
    for(var i = 0; i < lectures.length; i++) {
        var lecture = lectures[i];
        var lectureDate = moment(lecture.children[0].innerHTML, "MMMM DD").year(2015).hours(10);
        var now = moment();

        if(lectureDate.isAfter(now)) {
            $(lecture).addClass("next-lecture");
            $(".next-lecture-title").text(lecture.children[1].innerHTML);
            $(".next-lecture-date").text(lectureDate.format("dddd, MMMM Do") + " at 9:00 AM in Salomon 001.");
            break;
        }
    }
}

function setPageLinks() {
    var links = $("table.lectures td a");
    for(var i = 0; i < links.length; i++) {
        var link = $(links[i]);
        if(link.attr("data-page")) {
            var pageNumber = parseInt(link.attr("data-page")) + 8; // Add 8 because textbook page numbers are different from PDF page numbers
            var pageURL = "static/files/documents/CS22Book.pdf#page=" + pageNumber;

            link.attr("href", pageURL);
        }   
    }
}