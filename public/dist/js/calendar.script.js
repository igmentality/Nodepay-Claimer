(function ($) {
    "use strict";


    /****************************** App Calendar ****************************/

    var startDate = flatpickr(document.getElementById('start-date'), {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: new Date()
    });

    startDate.config.onChange.push(function (selectedDates, dateStr, instance) {

        flatpickr(document.getElementById('end-date'), {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: dateStr
        });
    });

    flatpickr(document.getElementById('end-date'), {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: new Date()
    });

    var calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
            height: 'parent',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            defaultView: 'dayGridMonth',
            defaultDate: '2020-06-01',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventMouseEnter: function (info) {
                $(info.el).attr('id', info.event.id);

                $('#' + info.event.id).popover({
                    template: '<div class="popover popover-primary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                    title: info.event.title,
                    content: info.event.extendedProps.description,
                    placement: 'top',
                    html: true
                });
                $('#' + info.event.id).popover('show');
                $('.popover .popover-header').css('background-color', $(info.el).css('background-color'));
            },
            eventMouseLeave: function (info) {
                $('#' + info.event.id).popover('hide');
            },
            eventClick: function (info) {
                var calEvent = info.event
                $('.eventbutton').attr('id', 'edit-event');
                $('#addevent').modal('toggle');
                $('#model-header').html('Edit Event');
                $('#edit-event').html('Edit Event');

                // Calendar Event Featch
                var eventTitle = info.event.title;
                var eventDescription = info.event.extendedProps.description;

                var element = document.querySelector('input[type="color"]');
                element.value = info.event.backgroundColor; //remember the hex value must has 7 characters
                element.value = info.event.backgroundColor;

                $('#title').val(eventTitle);
                $('#taskdescription').val(eventDescription);


                var taskInputStarttDate = $("#start-date");
                taskInputStarttDate.val(moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"));

                var taskInputEndDate = $("#end-date");
                taskInputEndDate.val(moment(info.event.end).format("YYYY-MM-DD HH:mm:ss"));

                var startDate = flatpickr(document.getElementById('start-date'), {
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    defaultDate: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"),
                });

                startDate.config.onChange.push(function (selectedDates, dateStr, instance) {
                    flatpickr(document.getElementById('end-date'), {
                        enableTime: true,
                        dateFormat: "Y-m-d H:i",
                        minDate: dateStr
                    });
                });

                flatpickr(document.getElementById('end-date'), {
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    defaultDate: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss"),
                    minDate: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss")
                });


                $('#edit-event').off('click').on('click', function (event) {
                    event.preventDefault();
                    var inputStarttDate = document.getElementById("start-date").value;
                    var inputEndDate = document.getElementById("end-date").value;

                    var arrayStartDate = inputStarttDate.split(' ');

                    var arrayEndDate = inputEndDate.split(' ');

                    var startDate = arrayStartDate[0];
                    var startTime = arrayStartDate[1];

                    var endDate = arrayEndDate[0];
                    var endTime = arrayEndDate[1];

                    var concatenateStartDateTime = startDate + 'T' + startTime + ':00';
                    var concatenateEndDateTime = endDate + 'T' + endTime + ':00';

                    calEvent.setProp('title', $('#title').val());
                    calEvent.setExtendedProp('description', $('#taskdescription').val());

                    calEvent.setStart(concatenateStartDateTime);
                    calEvent.setEnd(concatenateEndDateTime);
                    calEvent.setProp('backgroundColor', $('#inputColor').val());
                    calendar.render();
                    $('#addevent').modal('toggle');
                    resetform();
                });


            },
            events: [
                {
                    id: 'e-1',
                    title: 'All Day Event',
                    start: '2020-06-01',
                    color: '#a7f4ec',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-2',
                    title: 'Long Event',
                    start: '2020-06-07',
                    end: '2020-06-10',
                    color: '#ddd6ff',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-12',
                    title: 'Repeating Event',
                    start: '2020-06-10T16:00:00',
                    color: '#afe0ff',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-3',
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2020-06-16T16:00:00',
                    color: '#ffd0f2',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-4',
                    title: 'Conference',
                    start: '2020-06-24',
                    end: '2020-06-26',
                    color: '#fdc7af',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-5',
                    title: 'Meeting',
                    start: '2020-06-12T10:30:00',
                    end: '2020-06-12T12:30:00',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-6',
                    title: 'Lunch',
                    start: '2020-07-02T12:00:00',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-7',
                    title: 'Meeting',
                    start: '2020-06-12T14:30:00',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-8',
                    title: 'Happy Hour',
                    start: '2020-06-12T17:30:00',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-9',
                    title: 'Dinner',
                    start: '2020-06-12T20:00:00',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-10',
                    title: 'Birthday Party',
                    start: '2020-06-13T07:00:00',
                    color: '#fdc7af',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    id: 'e-11',
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2020-06-28',
                    color: '#aee1ff',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                }
            ]

        });

        calendar.render();

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }
        $("#addevent").on("hidden.bs.modal", function () {
            resetform();
        });
        $("#add-event").on("click", function () {
            var randomAlphaNumeric = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
            var inputValue = $("#title").val();
            var inputStarttDate = document.getElementById("start-date").value;
            var inputEndDate = document.getElementById("end-date").value;

            var arrayStartDate = inputStarttDate.split(' ');

            var arrayEndDate = inputEndDate.split(' ');

            var startDate = arrayStartDate[0];
            var startTime = arrayStartDate[1];

            var endDate = arrayEndDate[0];
            var endTime = arrayEndDate[1];

            var concatenateStartDateTime = startDate + 'T' + startTime + ':00';
            var concatenateEndDateTime = endDate + 'T' + endTime + ':00';
            var inputColor = $("#inputColor").val();
            var inputDescription = document.getElementById("taskdescription").value;
            calendar.addEvent({
                id: randomAlphaNumeric,
                title: inputValue,
                start: concatenateStartDateTime,
                end: concatenateEndDateTime,
                color: inputColor,
                description: inputDescription

            });
            calendar.render();
            resetform();
            $('#addevent').modal('toggle');
        });
    }
    function resetform() {
        $('.eventbutton').attr('id', 'add-event');
        $('#model-header').html('Add Event');
        $('.eventbutton').html('Add Event');
        for (var i = 0; i < document.querySelectorAll('input[type="text"]').length; i++) {
            document.querySelectorAll('input[type="text"]')[i].value = '';
        }

        for (var j = 0; j < document.getElementsByTagName('textarea').length; j++) {
            document.getElementsByTagName('textarea')[j].value = '';

        }

    }

})(jQuery);
