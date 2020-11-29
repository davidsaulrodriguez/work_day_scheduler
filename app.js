$(function() {
    $('#currentDay').text(LiveDate());
    
    function LiveDate() {
        setInterval(function () {
            $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
        }, 1000);
    }
});