!function(o){"use strict";o(window).on("elementor/frontend/init",()=>{elementorFrontend.hooks.addAction("frontend/element_ready/amoja-slide-overlay.default",t=>{let n=t.find(".elementor-slide-overlay-content");o(".elementor-slide-overlay-title",t).hover(function(e){e.preventDefault(),n.removeClass("elementor-active");e=o(this).data("trigger");o('[data-target="'+e+'"]',t).addClass("elementor-active")})})})}(jQuery);