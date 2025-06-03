$(document).ready(function(){
     // Activate Carousel https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_carousel_interval&stacked=h //
    $("#carouselDroneShots").carousel({interval: 3000});

    // Disable right-click on carousel images
    $('.carousel-inner img').on('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
});