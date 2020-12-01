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

    // Start the App
    init();

    // Display the Time slots

    SaveData.forEach(function(SaveData, idx) {
        const theTime = SaveData.theTime;
        const timedSlots = '<form>\
        <div class="time-block" id="' + idx + '">\
        <div class="row">\
        <div class="col-sm-12 col-md-1 hour">' + theTime + '</div>\
        <textarea class="col-sm-12 col-md-10 form-control">' + SaveData.theData + '</textarea>\
        <div class="col-sm-12 col-md-1">\
        <button class="saveBtn" type="submit"><i class="far fa-save fa-2x"></i></button>\
        </div>\
        </div>\
        </div>\
        </form>';

        $(".container").append(timedSlots);
    });

    // Event Listeners

    $('#clear').on('click', clear);
    $('.saveBtn').on('click', save);

    // App Functions
    function LiveDate() {
        setInterval(function () {
            $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
        }, 1000);
    }

    function save(event) {
        event.preventDefault();
        localStorage.setItem('SaveData', JSON.stringify(SaveData));
    }

    function LoadData() {
        let loadedData = JSON.parse(localStorage.getItem('SaveData'));
        if (loadedData) return SaveData = loadedData;
    }
    
    function clear() {
        localStorage.clear();
        window.location.reload();
    }

    function init() {
        LiveDate();
        LoadData();
    }
});