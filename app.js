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
        const theData = addColor(theTime);
        const timedSlots = `<form>\
        <div class="time-block" id="${idx}">\
        <div class="row">\
        <div class="col-sm-12 col-md-1 hour">${theTime}</div>\
        <textarea class="col-sm-12 col-md-10 form-control ${theData}">${SaveData.theData}</textarea>\
        <div class="col-sm-12 col-md-1">\
        <button class="saveBtn" type="submit"><i class="far fa-save fa-2x"></i></button>\
        </div>\
        </div>\
        </div>\
        </form>`;

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
        let slot = parseInt($(this).closest(".time-block").attr("id"));
        let data = $.trim($(this).parent().siblings("textarea").val());
        SaveData[slot].theData = data;
        localStorage.setItem('SaveData', JSON.stringify(SaveData));
    }

    function LoadData() {
        let loadedData = JSON.parse(localStorage.getItem('SaveData'));
        if (loadedData) return SaveData = loadedData;
    }

    function addColor(theTime) {
        let rnow = moment(rn, 'hA');
        let currentSlot = moment(theTime, 'hA');
        if (rnow.isBefore(currentSlot) === true) {
            return "future";
        } else if (rnow.isAfter(currentSlot) === true) {
            return "past";
        } else {
            return "present";
        }
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