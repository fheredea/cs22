$(document).ready(function() {
  bindTouchToHover();
});

function bindTouchToHover() {
    $(".profile-picture").bind("touchstart touchend", function(e) {
        e.preventDefault();
        $(this).toggleClass("hover");
    });
}