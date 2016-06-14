
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });

        $(".slicknav_nav li a").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });

        $('#menu').slicknav();

        $("#workCarousel").owlCarousel({
 
            // Most important owl features
            items : 2,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,

            //Autoplay
            autoPlay : false,
            stopOnHover : false,

            // Navigation
            navigation : false,
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