$(function () {

    'use strict';
  
    (function () {
  
      var aside = $('.cv_db_aside_area'),
  
          showAsideBtn = $('.cv_db_aside_nav_toggle_btn'),
  
          contents = $('#main_content');
  
          showAsideBtn.on("click", function () {
            
          aside.toggleClass('cv_db_show_aside_nav');

          contents.toggleClass('cv_db_content_fullwidth');
  
      });
  
      if ($(window).width() <= 767) {

        aside.addClass('cv_db_show_aside_nav overlay active');

        contents.addClass('cv_db_content_fullwidth');
      }
      $(window).on('resize', function () {
        if ($(window).width() > 767) {
          aside.removeClass('cv_db_show_aside_nav');
        }
      });
      
    }());
});