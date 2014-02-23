(function($) {
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });

        $(".slicknav_nav li a").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });

         $("#workCarousel").owlCarousel({
 
    // Most important owl features
    singleItem : true,
 
     //Autoplay
    autoPlay : false,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["Previous","Next"],
 
    //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    //Auto height
    autoHeight : false,
 
    // Other
    addClassActive : false,
    
});
    });
})(jQuery);