(function ($) {
    "use strict";

    var invoice;
    flatpickr(document.getElementById('due-date'), {
        enableTime: true,
        dateFormat: "d M Y",
        minDate: new Date()
    });

    $('.invoice-menu a').on('click', function () {
        $('.invoice-menu a').removeClass('active');
        $(this).addClass('active');
        $('.invoice').hide();
        $('.' + $(this).data("invoicetype")).show(500);
        return false;
    });

    $(".invoices").on("click", ".delete-invoice", function () {
        $(this).closest('.invoice').addClass('outline-badge-danger');
        $(this).closest('.invoice').slideUp(550, function () {
            $(this).closest('.invoice').remove();
        });
    });


    $(".invoices").on("click", ".edit-invoice", function () {
        invoice = $(this).closest('.invoice');
        $('#due-date').val($(this).closest('.invoice').find('.invoice-due-date').html());
        
        $('#status').val($(this).closest('.invoice').find('.invoice-content').data('status'));
        $("#editinvoice").modal();

    });
    $(".edit-invoice-form").submit(function (event) {
        var duedate = $('#due-date').val();
        var status = $('#status').val();
        invoice.find('.invoice-due-date').html(duedate);
        invoice.removeClass('paid-invoice');
        invoice.removeClass('pending-invoice');
        invoice.removeClass('canceled-invoice');
        invoice.addClass(status);
        invoice.find('.invoice-content').data('status',status);
        $('#editinvoice').modal('toggle');
        event.preventDefault();
    });

    $(".invoice-search").on("keyup", function () {
        var v = $(".invoice-search").val().toLowerCase();
        var rows = $('.' + $('.invoice-menu li a.active').data("invoicetype"));

        for (var i = 0; i < rows.length; i++) {
            var fullname = rows[i].getElementsByClassName("invoice-content");
            fullname = fullname[0].innerHTML.toLowerCase();
            if (fullname) {
                if (v.length == 0 || (v.length < 1 && fullname.indexOf(v) == 0) || (v.length >= 1 && fullname.indexOf(v) > -1)) {
                    rows[i].style.animation = 'fadein 7s';
                    rows[i].style.display = "block";
                } else {
                    rows[i].style.display = "none";
                    rows[i].style.animation = 'fadeout 7s';
                }
            }
        }
    });

    $(".invoice-info").on("click", function () {
        $('.inv-no').html($(this).closest('.invoice').find('.invoice-no').html());

        $('.view-invoice').fadeIn(1000);
    });
    $(".back-to-invoice").on("click", function () {

        $('.view-invoice').fadeOut();
    });

})(jQuery);
