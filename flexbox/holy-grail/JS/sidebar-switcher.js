( function( $ ) { 
    $('a.sidebar-left-toggle').click(function() {
        if(!$('.sidebar').hasClass('sidebar-left')) {
            $('.sidebar').addClass('sidebar-left');
        } // Add sidebar-left class if it is not already applied
    });

    $('a.sidebar-right-toggle').click(function() {
        if($('.sidebar').hasClass('sidebar-left')) {
            $('.sidebar').removeClass('sidebar-left');
        } // Remove sidebar-left class if it is already applied
    });

    $('a.no-sidebar-toggle').click(function() {
        // if(!$('.content').hasClass('no-sidebar')) {
        //     $('.content').addClass('no-sidebar');
        // } // Add no-sidebar class if it is not already applied
        // else {
        //     $('.content').removeClass('no-sidebar');
        // } // alternative: toggleClass
        $('.content').toggleClass('no-sidebar');
    });
})( jQuery );