$(document).ready(function() {
    setCurrentAssignment();
});

function setCurrentAssignment() {
    var rows = $("table.assignments tbody tr:not(.special)");
    var latestAssignment = rows.last()[0];

    var index = rows.length;
    var link = latestAssignment.children[1].children[0].href;
    var deadline = moment(latestAssignment.children[4].innerHTML).hours(23);

    // $(".current-link a").attr("href", link); // uncomment when assignments are out
    // $(".assignment-index").text(index);
    // $(".deadline-message").text("Due on " + deadline.format("dddd, MMMM Do") + " at 11 PM.");
}
