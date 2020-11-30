$(function() {
    const currentDay = moment().format('MMMM Do YYYY, h:mm:ss A');
    const rn = moment().format('hA');

    // The Time and User Data
    let SaveData = [
        {
            theTime: "9AM",
            theData: ""
        },
        {
            theTime: "10AM",
            theData: ""
        },
        {
            theTime: "11AM",
            theData: ""
        },
        {
            theTime: "12PM",
            theData: ""
        },
        {
            theTime: "1PM",
            theData: ""
        },
        {
            theTime: "2PM",
            theData: ""
        },
        {
            theTime: "3PM",
            theData: ""
        },
        {
            theTime: "4PM",
            theData: ""
        },
        {
            theTime: "5PM",
            theData: ""
        },
    ];

    // Start the app
    init();

    // Event Listeners

    $('#clear').on('click', clear);
    $('.saveBtn').on('click', save);

    // App Functions
    
    function LiveDate() {
        setInterval(function () {
            $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
        }, 1000);
    }

    function clear() {
        localStorage.clear();
        window.location.reload();
    }

    function save () {
        // To be added
    }

    function init() {
        LiveDate();
    };
});
