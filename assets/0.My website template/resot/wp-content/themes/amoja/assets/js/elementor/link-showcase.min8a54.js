!function(i){"use strict";i(window).on("elementor/frontend/init",()=>{elementorFrontend.hooks.addAction("frontend/element_ready/amoja-link-showcase.default",e=>{let t=e.find(".link-showcase-title-wrapper"),o=e.find(".link-showcase-content-wrapper");o.find(".elementor-active").show(),t.find(".elementor-link-showcase-title").hover(function(e){var n=i(this).attr("aria-controls");t.find(".elementor-link-showcase-title").removeClass("elementor-active"),o.find(".elementor-link-showcase-content").removeClass("elementor-active"),i(this).addClass("elementor-active"),o.find("#"+n).addClass("elementor-active")})})})}(jQuery);