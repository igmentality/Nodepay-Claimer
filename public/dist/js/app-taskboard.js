(function ($) {
    "use strict";

    var list;
    var task;
    $(".task-list").sortable(
            {
                connectWith: ".task-list",
                items: ".task-card"
            });


    $(".add-list").submit(function (event) {
        var title = $('#list-name').val();

        var html = `<div class="col-12 col-md-6 col-lg mt-3 task-list-item">
                        <div class="card bg-primary-light">
                            <div class="card-header d-flex justify-content-between align-items-center">                               
                                <h6 class="card-title">` + title + `</h6>   
                                <div class="dropdown">
                                    <a href="#"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ml-2 icon-arrow-down"></i>
                                    </a>                                    

                                    <ul class="dropdown-menu dropdown-menu-right border py-0">
                                       <li><a class="dropdown-item edit-task" href="#"><i class="icon-pencil"></i> Rename</a></li>
                                        <li><a class="dropdown-item delete-task" href="#"><i class="icon-trash"></i> Delete</a></li>
                                    </ul>
                                </div>                               
                            </div>
                            <div class="card-body"> 
                                <div class="task-list">
                                    
                                </div>
                               <a href="#" class="bg-primary w-100 d-block text-center py-2 px-2 mt-3 rounded text-white add-task" data-toggle="modal" data-target="#addtask">
                                    <i class="icon-plus align-middle text-white"></i> <span>Add Task</span>
                                </a>
                            </div>
                        </div>
                    </div>`;

        $(".task-list-row").append(html);
        $('#list-name').val('');
        $('#addlist').modal('toggle');
        $(".task-list").sortable(
                {
                    connectWith: ".task-list",
                    items: ".task-card"
                });
        event.preventDefault();
    });


    $(".task-list-row").on("click", ".delete", function () {
        $(this).closest('.task-list-item').slideUp(550, function () {
            $(this).closest('.task-list-item').remove();
        });
        event.preventDefault();
    });

    $(".task-list-row").on("click", ".edit", function () {
        list = $(this).closest('.task-list-item').find('.card-title');
        $('#edit-list-name').val($(this).closest('.task-list-item').find('.card-title').html());
        $("#editlist").modal();

    });
    $(".edit-list").submit(function (event) {
        var title = $('#edit-list-name').val();
        list.html(title);
        $('#editlist').modal('toggle');
        event.preventDefault();
    });

    $(".task-list-row").on("click", ".delete-task", function () {
        $(this).closest('.task-card').slideUp(550, function () {
            $(this).closest('.task-card').remove();
        });
        event.preventDefault();
    });

    $(".task-list-row").on("click", ".add-task", function () {
        task = $(this);
        $("#addtask").modal();
    });


    $(".add-task").submit(function (event) {
        var title = $('#task-name').val();
        var description = $('#task-description').val();
        var today = moment().format('D MMM, YYYY');
        var html = `<div class="card my-2 task-card">                            
                                        <div class="card-content">
                                            <div class="card-body p-4 body-color">
                                                <h6 class="mb-3 font-w-600">` + title + `</h6>
                                                <div class="task-content mb-3">` + description + `</div>
                                                <p class="font-w-500 tx-s-12"><i class="icon-calendar"></i><span class="task-date"> ` + today + `</span></p>                                            
                                                <div class="d-flex">
                                                    <div class="my-auto line-h-1 h5">
                                                        <a class="text-success edit-task" href="#" data-toggle="modal" data-target="#edittask"><i class="icon-pencil"></i></a>
                                                        <a class="text-danger delete-task" href="#"><i class="icon-trash"></i></a>                              
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

        task.prev('.task-list').append(html);
        $('#task-name').val('');
        $('#task-description').val('');
        $('#addtask').modal('toggle');
        event.preventDefault();
    });
    $(".task-list-row").on("click", ".edit-task", function () {
        task = $(this).closest('.task-card');
        $('#edit-task-name').val($(this).closest('.task-card').find('h6').html());
        $('#edit-task-description').val($(this).closest('.task-card').find('.task-content').html());
        $('#task-date').val($(this).closest('.task-card').find('.task-date').html());
        $("#edittask").modal();
    });


    $(".edit-task").submit(function (event) {
        var title = $('#edit-task-name').val();
        var description = $('#edit-task-description').val();
        var taskdate = $('#task-date').val();

        var html = `                           
                                        <div class="card-content">
                                            <div class="card-body p-4 body-color">
                                                <h6 class="mb-3 font-w-600">` + title + `</h6>
                                                <div class="task-content mb-3">` + description + `</div>
                                                <p class="font-w-500 tx-s-12"><i class="icon-calendar"></i><span class="task-date"> ` + taskdate + `</span></p>                                            
                                                <div class="d-flex">
                                                    <div class="my-auto line-h-1 h5">
                                                        <a class="text-success edit-task" href="#" data-toggle="modal" data-target="#edittask"><i class="icon-pencil"></i></a>
                                                        <a class="text-danger delete-task" href="#"><i class="icon-trash"></i></a>                                 
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                   `;

        task.html(html);
        $('#edit-task-name').val('');
        $('#edit-task-description').val('');
        $('#edittask').modal('toggle');
        event.preventDefault();
    });

})(jQuery);
