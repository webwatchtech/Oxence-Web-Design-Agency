!function(n){"use strict";n(window).on("elementor/frontend/init",()=>{elementorFrontend.hooks.addAction("frontend/element_ready/amoja-tabimage-effect.default",e=>{e.find("swiper")&&elementorFrontend.elementsHandler.addHandler(amojaSwiperBase,{$element:e});let t=e.find(".elementor-tabimage-wrapper");t&&(t.find(".elementor-active").show(),t.find(".elementor-tabimage-item").hover(function(e){e.preventDefault();e=n(this).data("trigger");t.find(".elementor-tabimage-item").removeClass("elementor-active"),n(this).addClass("elementor-active"),t.find('[data-target="'+e+'"]').addClass("elementor-active")}))})})}(jQuery);