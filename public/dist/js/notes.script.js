(function ($) {
    "use strict";
    var note;

    $('.scrollertodo').slimScroll({
        height: '530px',
        color: '#fff'
    });

    $('.note-label li a').on('click', function () {
        $('.notes .note').hide();
        $('.' + $('.notes-menu li a.active').data("notetype") + '.' + $(this).data("label")).show(500);
        return false;
    });

    $('.notes-menu li a').on('click', function () {
        $('.notes-menu li a').removeClass('active');
        $(this).addClass('active');
        $('.notes .note').hide();
        $('.' + $(this).data("notetype")).show(500);
        return false;
    });

    $(".notes").on("click", ".delete-note", function () {
        $(this).closest('.note').slideUp(550, function () {
            $(this).closest('.note').remove();
        });
        event.preventDefault();
    });

    $(".add-note-form").submit(function (event) {
        var title = $('#title').val();
        var description = $('#description').val();
        var today = moment().format('D MMM, YYYY');
        var todoclass = '';

        if ($('#starred').prop("checked") == true) {
            todoclass = 'starred';
        }
        if ($('#important').prop("checked") == true) {
            todoclass = todoclass + ' important';
        }
        if ($('#type').val() != '') {
            todoclass = todoclass + ' ' + $('#type').val();
        }
        var html = `<div class="col-12  col-md-6 col-lg-4 my-3 note all ` + todoclass + `" data-type="` + $('#type').val() + `">
                                    <div class="card">                            
                                        <div class="card-content">
                                            <div class="card-body p-4">
                                                <h6 class="mb-3 font-w-600">` + title + `</h6>
                                                <p class="font-w-500 tx-s-12"><i class="icon-calendar"></i> <span class="note-date">` + today + `</span></p> 
                                                <div class="note-content mb-4">` + description + `</div>
                                                <div class="d-flex notes-tool">
                                                    <span class="icon-star"></span> 
                                                    <span class="icon-exclamation mx-2"></span>    
                                                    <span class="dot"></span> 
                                                    <div class="ml-auto">
                                                        <a class="text-success edit-note" href="#" data-toggle="modal" data-target="#editnote"><i class="icon-pencil"></i></a>
                                                        <a class="text-danger delete-note" href="#"><i class="icon-trash"></i></a>                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

        $('.notes').prepend(html);
        $('#title').val('');
        $('#description').val('');
        $('#addnote').modal('toggle');
        event.preventDefault();
    });
    $(".notes").on("click", ".edit-note", function () {
        note = $(this).closest('.note');
        $('#edit-title').val($(this).closest('.note').find('h6').html());
        $('#edit-description').val($(this).closest('.note').find('.note-content').html());
        $('.note-date').val($(this).closest('.note').find('.note-date').html());
        $("#edit-type").val($(this).closest('.note').data('type'));
        if ($(this).closest('.note').hasClass("starred"))
        {
            $('#edit-starred').prop("checked", true);
        }
        if ($(this).closest('.note').hasClass("important"))
        {
            $('#edit-important').prop("checked", true);
        }
        $("#editnote").modal();

    });

    $(".edit-note-form").submit(function (event) {
        var title = $('#edit-title').val();
        var description = $('#edit-description').val();
        var todoclass = '';
        note.removeClass('business-note');
        note.removeClass('private-note');
        note.removeClass('social-note');
        note.removeClass('personal-note');
        note.removeClass('work-note');
        note.removeClass('starred');
        note.removeClass('important');
        if ($('#edit-starred').prop("checked") == true) {
            todoclass = 'starred';
        }
        if ($('#edit-important').prop("checked") == true) {
            todoclass = todoclass + ' important';
        }
        var today = $('.note-date').val();

        if ($('#edit-type').val() != '') {
            todoclass = todoclass + ' ' + $('#edit-type').val();
        }
        note.addClass(todoclass);
        note.data('type', $('#edit-type').val());


        var html = `<div class="card">                            
                                        <div class="card-content">
                                            <div class="card-body p-4">
                                                <h6 class="mb-3 font-w-600">` + title + `</h6>
                                                <p class="font-w-500 tx-s-12"><i class="icon-calendar"></i> <span class="note-date">` + today + `</span></p> 
                                                <div class="note-content mb-4">` + description + `</div>
                                                <div class="d-flex notes-tool">
                                                    <span class="icon-star"></span> 
                                                    <span class="icon-exclamation mx-2"></span>    
                                                    <span class="dot"></span> 
                                                    <div class="ml-auto">
                                                        <a class="text-success edit-note" href="#" data-toggle="modal" data-target="#editnote"><i class="icon-pencil"></i></a>
                                                        <a class="text-danger delete-note" href="#"><i class="icon-trash"></i></a>                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

        note.html(html);
        $('#editnote').modal('toggle');
        event.preventDefault();
    });


})(jQuery);
