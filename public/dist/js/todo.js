(function ($) {
    "use strict";
    var primarycolor = getComputedStyle(document.body).getPropertyValue('--primarycolor');
    var todo;

    $('.scrollertodo').slimScroll({
        height: '500px',
        color: '#fff'
    });

    $('.todo-menu a').on('click', function () {
        $('.todo-menu a').removeClass('active');
        $(this).addClass('active');
        $('.todo-item').hide();
        $('.' + $(this).data("todotype")).show(500);

        return false;
    });
    $('.todo-item input[type="checkbox"]').on('click', function () {
        if ($(this).prop("checked") == true) {
            $(this).parent().parent().addClass('completed');
        } else
        {
            $(this).parent().parent().removeClass('completed');
        }
    });

    $(".add-todo-form").submit(function (event) {
        var title = $('#title').val();
        var description = $('#description').val();
        var todoclass = '';

        if ($('#starred').prop("checked") == true) {
            todoclass = 'starred';
        }
        if ($('#important').prop("checked") == true) {
            todoclass = todoclass + ' important';
        }
        var today = moment().format('D MMM, YYYY');
        var html = `<li class="todo-item ` + todoclass + `">
                <label class="chkbox"> 
                <input type="checkbox" checked="checked">
                <span class="checkmark mt-2"></span>
                </label>
                <div class="todo-content">
                <h3>` + title + `</h3>
                <p class="text-muted mb-0 font-weight-bold todo-date">` + today + `</p>
                <p class="small-content text-muted mb-0">` + description + `</p>
                </div>
                <div class="ml-auto">
                <i class="icon-star mr-2 font-15"></i>
                <i class="icon-exclamation font-15 mr-2"></i>
                </div>
                <div>
                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-options-vertical font-15"></i></a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-right">
                <a class="dropdown-item edit-todo" href="#">Edit</a>
                <a class="dropdown-item delete" href="#">Delete</a> 
                </div>
                </div>
                </li>`;

        $(".todo-list").prepend(html);
        $('#newtodo').modal('toggle');
        event.preventDefault();
    });


    $(".todo-list").on("click", ".delete", function () {
        $(this).closest('.todo-item').addClass('bg-danger');
        $(this).closest('.todo-item').slideUp(550, function () {
            $(this).closest('.todo-item').remove();
        });
    });

    $(".todo-list").on("click", ".edit-todo", function () {
        todo = $(this).closest('.todo-item');
        $('#edit-title').val($(this).closest('.todo-item').find('h3').html());
        $('#edit-description').val($(this).closest('.todo-item').find('.small-content').html());
        $('#edit-date').val($(this).closest('.todo-item').find('.todo-date').html());
        if ($(this).closest('.todo-item').hasClass("starred"))
        {
            $('#edit-starred').prop("checked", true);
        }
        if ($(this).closest('.todo-item').hasClass("important"))
        {
            $('#edit-important').prop("checked", true);
        }
        $("#edittodo").modal();

    });
    $(".edit-todo-form").submit(function (event) {
        var title = $('#edit-title').val();
        var description = $('#edit-description').val();
        var todoclass = '';

        if ($('#edit-starred').prop("checked") == true) {
            todoclass = 'starred';
        }
        if ($('#edit-important').prop("checked") == true) {
            todoclass = todoclass + ' important';
        }
        var today = $('#edit-date').val();
        todo.addClass(todoclass);
        var html = `
                <label class="chkbox"> 
                <input type="checkbox" checked="checked">
                <span class="checkmark mt-2"></span>
                </label>
                <div class="todo-content">
                <h3>` + title + `</h3>
                <p class="text-muted mb-0 font-weight-bold todo-date">` + today + `</p>
                <p class="small-content text-muted mb-0">` + description + `</p>
                </div>
                <div class="ml-auto">
                <i class="icon-star mr-2 font-15"></i>
                <i class="icon-exclamation font-15 mr-2"></i>
                </div>
                <div>
                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-options-vertical font-15"></i></a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-right">
                <a class="dropdown-item edit-todo" href="#">Edit</a>
                <a class="dropdown-item delete" href="#">Delete</a> 
                </div>
                </div>
                `;

        todo.html(html);
        $('#edittodo').modal('toggle');
        event.preventDefault();
    });

    $(".todo-search").on("keyup", function () {
        var v = $(".todo-search").val().toLowerCase();
        var rows = $('.' + $('.todo-menu li a.active').data("todotype"));

        for (var i = 0; i < rows.length; i++) {
            var fullname = rows[i].getElementsByClassName("todo-content");
            fullname = fullname[0].innerHTML.toLowerCase();
            if (fullname) {
                if (v.length == 0 || (v.length < 1 && fullname.indexOf(v) == 0) || (v.length >= 1 && fullname.indexOf(v) > -1)) {
                    rows[i].style.animation = 'fadein 7s';
                    rows[i].style.display = "flex";
                } else {
                    rows[i].style.display = "none";
                    rows[i].style.animation = 'fadeout 7s';
                }
            }
        }
    });
})(jQuery);
