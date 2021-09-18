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

// Open the Modal
function openModal() {
	document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}
