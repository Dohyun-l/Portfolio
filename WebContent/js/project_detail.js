particlesJS("particles-js", {
	"particles" : {
		"number" : {
			"value" : 155,
			"density" : {
				"enable" : true,
				"value_area" : 789.1476416322727
			}
		},
		"color" : {
			"value" : "#ffffff"
		},
		"shape" : {
			"type" : "circle",
			"stroke" : {
				"width" : 0,
				"color" : "#000000"
			},
			"polygon" : {
				"nb_sides" : 5
			},
			"image" : {
				"src" : "img/github.svg",
				"width" : 100,
				"height" : 100
			}
		},
		"opacity" : {
			"value" : 0.48927153781200905,
			"random" : false,
			"anim" : {
				"enable" : true,
				"speed" : 1,
				"opacity_min" : 0,
				"sync" : false
			}
		},
		"size" : {
			"value" : 2,
			"random" : true,
			"anim" : {
				"enable" : true,
				"speed" : 2,
				"size_min" : 0,
				"sync" : false
			}
		},
		"line_linked" : {
			"enable" : true,
			"distance" : 150,
			"color" : "#ffffff",
			"opacity" : 0.4,
			"width" : 1
		},
		"move" : {
			"enable" : true,
			"speed" : 0.2,
			"direction" : "none",
			"random" : true,
			"straight" : false,
			"out_mode" : "out",
			"bounce" : false,
			"attract" : {
				"enable" : false,
				"rotateX" : 600,
				"rotateY" : 1200
			}
		}
	},
	"interactivity" : {
		"detect_on" : "canvas",
		"events" : {
			"onhover" : {
				"enable" : true,
				"mode" : "bubble"
			},
			"onclick" : {
				"enable" : true,
				"mode" : "push"
			},
			"resize" : true
		},
		"modes" : {
			"grab" : {
				"distance" : 400,
				"line_linked" : {
					"opacity" : 1
				}
			},
			"bubble" : {
				"distance" : 83.91608391608392,
				"size" : 1,
				"duration" : 3,
				"opacity" : 1,
				"speed" : 3
			},
			"repulse" : {
				"distance" : 200,
				"duration" : 0.4
			},
			"push" : {
				"particles_nb" : 4
			},
			"remove" : {
				"particles_nb" : 2
			}
		}
	},
	"retina_detect" : true
});

$(function() {
	var data = [
			{
				action : 'type',
				strings : [ "주제" ],
				output : '&nbsp;쇼핑몰<br><br>',
				postDelay : 1000
			},
			{
				action : 'type',
				strings : [ "500 Internal Error" ],
				output : '<span class="gray">Coded by cluzier +CodePen.io</><br>&nbsp;',
				postDelay : 1000
			},
			{
				action : 'type',
				strings : [
						"These are not the error codes you're looking for.",
						'Please either report this error to an administrator or return back and forget you were here...' ],
				postDelay : 2000
			}

	];
	runScripts1(data, 0);
});

function runScripts1(data, pos) {
	var prompt = $('.prompt1'), script = data[pos];
	if (script.clear === true) {
		$('.history1').html('');
	}
	switch (script.action) {
	case 'type':
		// cleanup for next execution
		prompt.removeData();
		$('.typed-cursor').text('');
		prompt.typed({
			strings : script.strings,
			typeSpeed : 30,
			callback : function() {
				var history = $('.history1').html();
				history = history ? [ history ] : [];
				history.push('$ ' + prompt.text());
				if (script.output) {
					history.push(script.output);
					prompt.html('');
					$('.history1').html(history.join('<br>'));
				}
				// scroll to bottom of screen
				$('section.terminal1').scrollTop(
						$('section.terminal1').height());
				// Run next script
				pos++;
				if (pos < data.length) {
					setTimeout(function() {
						runScripts1(data, pos);
					}, script.postDelay || 1000);
				}
			}
		});
		break;
	case 'view':

		break;
	}
}

$(function() {
	var data = [
			{
				action : 'type',
				strings : [ "주제" ],
				output : '&nbsp;커뮤니티 사이트(DeCo - Developer Completion)<br><br>',
				postDelay : 1000
			},
			{
				action : 'type',
				strings : [ "사용 언어" ],
				output : '<span class="gray">Coded by cluzier +CodePen.io</><br>&nbsp;',
				postDelay : 1000
			},
			{
				action : 'type',
				strings : [
						"These are not the error codes you're looking for.",
						'Please either report this error to an administrator or return back and forget you were here...' ],
				postDelay : 2000
			}

	];
	runScripts2(data, 0);
});

function runScripts2(data, pos) {
	var prompt = $('.prompt2'), script = data[pos];
	if (script.clear === true) {
		$('.history2').html('');
	}
	switch (script.action) {
	case 'type':
		// cleanup for next execution
		prompt.removeData();
		$('.typed-cursor').text('');
		prompt.typed({
			strings : script.strings,
			typeSpeed : 30,
			callback : function() {
				var history = $('.history2').html();
				history = history ? [ history ] : [];
				history.push('$ ' + prompt.text());
				if (script.output) {
					history.push(script.output);
					prompt.html('');
					$('.history2').html(history.join('<br>'));
				}
				// scroll to bottom of screen
				$('section.terminal2').scrollTop(
						$('section.terminal2').height());
				// Run next script
				pos++;
				if (pos < data.length) {
					setTimeout(function() {
						runScripts2(data, pos);
					}, script.postDelay || 1000);
				}
			}
		});
		break;
	case 'view':

		break;
	}
}