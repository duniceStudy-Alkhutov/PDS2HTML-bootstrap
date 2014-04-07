/**
 * Created by user on 3/25/14.
 */

$(document).ready(function(){
//    initialize();
    //function set width to long event in calendar
    var myFoo = function(elem, pos_1, pos_2){
        var totalWidth = 0;
        td = $('#cal-table td:has('+elem+')');
        totalWidth = td.width();
        trEls = td.siblings().slice(pos_1, pos_2);
        $(trEls).each(function(){
            totalWidth += $(this).width();
        });
        $(elem).css("width", totalWidth - 1)
    };

    myFoo('#long_day', 0, 3);
    myFoo('#click4google', 4, 5);

    $(window).resize(function(){
        myFoo('#long_day', 0, 3);
        myFoo('#click4google', 4, 5);
    });

    //show/hide items in left-sidebar
    $(".left-sidebar div").click(function(){
        //slide up all the link lists
        $(".left-sidebar ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
        }
    });

    //add new item to TO DO list
    $('#add_form').submit(function () {
        if ($('#add-input').val() !== '') {
            var input_value = $('#add-input').val();
            $('#list-box').append('<div class="todo-line">' +
                '                       <div><input type="checkbox"></div>' +
                '                       <div><label>' + input_value + '</label></div>' +
                '                  </div>');
            //$('ul').append('<li>' + input_value '<a href="">x</a></li>');
        };
        $('#add-input').val('');
        return false;
    });

    //add new message to chat
    $('#send-form').submit(function(){
        if($('#send-msg').val() !== ''){
            var input_value = $('#send-msg').val();
            $('#chat-text-box').append(
                '<div class="iamauthor row">' +
                    '<div class="col-md-2 col-sm-2 col-xs-2 col-lg-1">' +
                        '<div class="chat-photo-left">' +
                            '<img src="styles/images/bob-nilson-big.png" alt="bob">' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-md-10 col-sm-10 col-xs-10 col-lg-11 pull-right">' +
                        '<div class="chat-text-left">' +
                            '<span><span class="blue_span">Bob Nilson</span> at some time </span>'+
                            '<div>'+ input_value+'</div>'+
                        '</div> '+
                    '</div>'+
                '</div> ')
        };
        $('#send-msg').val('');
        return false;
    });

    //hide/show add panel in Task layer
    $("#hide_add_task_panel").click(function(){
        $("#add-task-panel").hide();
    });
    $("#show_add_task_panel").click(function(){
        $("#add-task-panel").show();
    });

    //Show Google-maps
    $('#gmaps-field, #gmaps-cancel').click(function(){
        $('#gmaps').toggleClass('invisible');
    });
    function initialize() {
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644)
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    //drug-n-drop map layer
    $('#gmaps').draggable({'handle': '#gmaps-panel', cancel : '#gmaps-close'});

    //datetimepicker
    $(function () {
        $('.date-input-text').datetimepicker({
            autoclose: 1,
            format: 'yyyy MM dd - hh:ii'
        });
    });
    $(function(){
        $('.timepicker').datetimepicker({
            pickDate: false
        });
    });

    //show/hide large notepad
    $('#enlarge').click(function(){
        $('#ninja-notepad').fadeIn('slow');
    });
    $('#ninja-notepad').focusout(function(){
        var new_text = $('#notepad-content_2').text();
        $('#notepad-content').text(new_text);
        $('#ninja-notepad').fadeOut();
    });
});