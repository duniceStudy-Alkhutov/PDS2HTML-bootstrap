/**
 * Created by user on 3/25/14.
 */
$(document).ready(function(){
    $(".left-sidebar div").click(function(){
        //slide up all the link lists
        $(".left-sidebar ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
        }
    });
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
    $('#send-form').submit(function(){
        if($('#send-msg').val() !== ''){
            var input_value = $('#send-msg').val();
            $('#chat-text-box').append(
                '<div class="iamauthor row">' +
                    '<div class="chat-photo-left col-md-2 col-sm-2 col-xs-1">' +
                        '<img src="styles/images/bob-nilson-big.png" alt="bob">' +
                    '</div>' +
                    '<div class="col-md-10 col-sm-10 col-xs-11 pull-right">' +
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
});