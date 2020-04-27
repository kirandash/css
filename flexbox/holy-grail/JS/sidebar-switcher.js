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
})( jQuery );