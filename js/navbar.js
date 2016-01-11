$(document).scroll(function() {
   
    if( $(this).scrollTop() > 260 ) {
        $('.navbar').addClass('grey_bg');
    }
    else {
        $('.navbar').removeClass('grey_bg');
    }
   
});








