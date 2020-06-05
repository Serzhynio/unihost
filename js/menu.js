jQuery(document).ready(function($){
    $('.lang_menu').on('click', function(e){
        slideMenu('.drop_lang_menu');
    });
    $('.currency_menu').on('click', function(e){
        slideMenu('.drop_currency_menu');
    });
    $('.navbar-toggle').on('click', function(e){
        slideMenu('.header_bottom');
    });
    $('.contact_list').on('click', function(e){
        slideMenu('.contact_drop_list');
    });
    $('.active_main_menu').on('click', function(e){
        slideMenu('.drop_main_active');
    });
    // $('.main-menu-hover').on('click', '.open-podmenu', function(e){
    //     var $what_to_slide = $(this).parent().find('.podmenu');
    //     $(this).hide().next().show();
    //     $what_to_slide.slideToggle( "slow" );
    // });
    // $('.main-menu-hover').on('click', '.close-podmenu', function(e){
    //     var $what_to_slide = $(this).parent().find('.podmenu');
    //     $(this).hide().prev().show();
    //     $what_to_slide.slideToggle( "slow" );
    // });
    
    var slideMenu = function(what_to_slide){
        $what_to_slide = $(what_to_slide);
        $what_to_slide.slideToggle( "slow" );
    }
});