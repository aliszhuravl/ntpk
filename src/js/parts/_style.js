
$(document).ready(function() {
    $("#list").click(function () {
        $(".items_tile").addClass('list_styled');
    });

    $("#tile").click(function () {
        $(".items_tile").removeClass('list_styled');
    });

});