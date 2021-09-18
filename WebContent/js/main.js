/*$(document).ready(function() {

	var i = 1;
	setInterval(function() {
		if (i > 6) {
			i = 1;
		}
		$('.slidelist_project1>li').css('transform',
				'translateX(-' + (i++ - 1) + '00%)');
	}, 2000);

	var j = 1;
	setInterval(function() {
		if (j > 7) {
			j = 1;
		}
		$('.slidelist_project2>li').css('transform',
				'translateX(-' + (j++ - 1) + '00%)');
	}, 2000);
});*/

$(document).ready(function() {
	$('[data-toggle="java"]').popover();
});

$(document).ready(function() {
	$('[data-toggle="mysql"]').popover();
});

$(document).ready(function() {
	$('[data-toggle="html"]').popover();
});

$(document).ready(function() {
	$('[data-toggle="ajax"]').popover();
});

$(document).ready(function() {
	$('[data-toggle="spring"]').popover();
});

$(document).ready(function() {
	$('[data-toggle="python"]').popover();
});
