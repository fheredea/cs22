$(document).ready(function() {
    setCurrentAssignment();
});

function setCurrentAssignment() {
    var tableBody = $("table.assignments tbody");
    var latestAssignment = tableBody.children().last()[0];

    var index = tableBody[0].children.length - 1;
    var link = latestAssignment.children[1].children[0].href;
    var deadline = moment(latestAssignment.children[4].innerHTML).hours(23);

    $(".current-link a").attr("href", link);
    $(".assignment-index").text(index);
    $(".deadline-message").text("Due on " + deadline.format("dddd, MMMM Do") + " at 11 PM.");
}