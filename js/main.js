(function($){"use strict";$(window).load(function(){$("#loader").fadeOut("slow",function(){$("#preloader").delay(50).fadeOut("slow");});})
$(window).on('scroll',function(){var y=$(window).scrollTop(),topBar=$('header');if(y>1){topBar.addClass('sticky');}else{topBar.removeClass('sticky');}});var toggleButton=$('.menu-toggle'),nav=$('.main-navigation');toggleButton.on('click',function(event){event.preventDefault();toggleButton.toggleClass('is-clicked');nav.slideToggle();});if(toggleButton.is(':visible'))nav.addClass('mobile');$(window).resize(function(){if(toggleButton.is(':visible'))nav.addClass('mobile');else nav.removeClass('mobile');});$('#main-nav-wrap li a').on("click",function(){if(nav.hasClass('mobile')){toggleButton.toggleClass('is-clicked');nav.fadeOut();}});var sections=$("section"),navigation_links=$("#main-nav-wrap li a");sections.waypoint({handler:function(direction){var active_section;active_section=$('section#'+this.element.id);if(direction==="up")active_section=active_section.prev();var active_link=$('#main-nav-wrap a[href="#'+active_section.attr("id")+'"]');navigation_links.parent().removeClass("current");active_link.parent().addClass("current");},offset:'25%'});$('.smoothscroll').on('click',function(e){e.preventDefault();var target=this.hash,$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top},800,'swing',function(){window.location.hash=target;if(target==="#contact-us")field_focus();});});$('input, textarea, select').placeholder()
var pxShow=300;var fadeInTime=400;var fadeOutTime=400;var scrollSpeed=300;jQuery(window).scroll(function(){if(!($("#header-search").hasClass('is-visible'))){if(jQuery(window).scrollTop()>=pxShow){jQuery("#go-top").fadeIn(fadeInTime);}else{jQuery("#go-top").fadeOut(fadeOutTime);}}});})(jQuery);var $contactForm=$('#mc-contact-form');$contactForm.submit(function(e){e.preventDefault();$.ajax({url:'//formspree.io/knight.ravioli@gmail.com',method:'POST',data:$(this).serialize(),dataType:'json',beforeSend:function(){$contactForm.append('<div class="alert alert--loading">Sending message…</div>');},success:function(data){$contactForm.find('.alert--loading').hide();$contactForm.append('<div class="alert alert--success">Message sent!</div>');},error:function(err){$contactForm.find('.alert--loading').hide();$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');}});});