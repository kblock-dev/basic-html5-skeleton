$(document).ready(function(){
    "use strict";
    // jQuery test button click event
    $('#jqueryTest').on('click', function(){
       var modal = $('.modal');
       var modalTitle = $('.modal .modal-title');
       var modalBody = $('.modal .modal-body');
       modal.modal({show: true});
       modalTitle.html('jQuery Test');
       modalBody.html('<p>jQuery loaded successfully!</p>');
   });

    // navbar display active link when clicked
    $('nav a').on('click', function(){
        $('nav li.active').removeClass('active');
        $(this).parent().addClass('active');
    });

});
