/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click

$('.navbar-collapse ul li a').click(function() {
    // Only target hash links (e.g., #services, #about) to prevent closing on external links
    if ($(this).attr('href').startsWith('#')) {

        // Check if the menu is currently visible (open)
        if ($('.navbar-collapse').hasClass('in')) {
            // Use a slight delay before calling the Bootstrap collapse API
            setTimeout(function() {
                // Tell Bootstrap to explicitly hide the collapse component
                $('.navbar-collapse').collapse('hide');
            }, 300); // 300ms delay to allow scroll animation to start
        }
    }
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});