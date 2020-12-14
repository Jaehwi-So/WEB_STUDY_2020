/*-----------------------------------------------------------------------------------
 /* Styles Switcher
 -----------------------------------------------------------------------------------*/

(function ($) {
	'use strict';

	// Resizer
	var resfunc = function(d){if(self!=top||d.getElementById('toolbar')&&d.getElementById('toolbar').getAttribute('data-resizer'))return false;d.write('<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/></head><body><a data-viewport="320x480" data-icon="mobile">Mobile (e.g. Apple iPhone)</a><a data-viewport="320x568" data-icon="mobile" data-version="5">Apple iPhone 5</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">Tablet (e.g. Apple iPad 2-3rd, mini)</a><a data-viewport="1280x800" data-icon="notebook">Widescreen</a><a data-viewport="1920×1080" data-icon="tv">HDTV 1080p</a><script src="http://lab.maltewassermann.com/viewport-resizer/resizer.min.js"></script></body></html>')};

	var resizerEnabled = sessionStorage.getItem('resizerEnabled');
	var isWbIframe = function() {
		try {
			return (self !== top && top.location.host == "wrapbootstrap.com");
		} catch (e) {
			return true;
		}
	};
	var isSupportedRes = function() {
		return (document.documentElement.clientWidth >= 1280);
	};

	if (resizerEnabled !== 'disabled' && !isWbIframe() && isSupportedRes()) {
		$(window).load(function () {
			setTimeout(function() { resfunc(document); }, 0);
		});
	}

	try {
		var closeBtn = top.document.querySelector('#toolbar a[data-icon="close"]');
		if (closeBtn) {
			closeBtn.addEventListener("click" , function() {
				sessionStorage.setItem('resizerEnabled', 'disabled');
			});
		}
	} catch (e) {}

	var resizerChecked = (resizerEnabled === 'disabled') ? '' : 'checked';

	if (isWbIframe()) {
		resizerChecked = 'disabled';
	}
	// Resizer end

	var html =
		'<!-- Styles Selector -->' +
		'<div id="style-switcher">' +
			'<h2>Demo Panel <a href="#"><i class="flaticon-tool-1"></i></a></h2>' +
			'<div>' +
				'<h3>Layout Style</h3>' +
				'<div class="layout-style">' +
					'<select id="layout-style" autocomplete="off">' +
						'<option value="2" selected>Boxed</option>' +
						'<option value="1">Wide</option>' +
					'</select>' +
				'</div>' +
				'<div class="checkbox-group">' +
					'<input type="checkbox" id="like-single-page">' +
					'<label for="like-single-page">' +
						'<span class="check"></span>' +
						'<span class="box"></span>' +
						'Ajax Page load' +
					'</label>' +
				'</div>' +
				'<div class="checkbox-group">' +
					'<input type="checkbox" id="resizer" ' + resizerChecked + ' data-toggle="popover" data-content="Some amazing content.">' +
					'<label for="resizer">' +
						'<span class="check"></span>' +
						'<span class="box"></span>' +
						'Resizer' +
					'</label>' +
				'</div>' +
				'<span id="resizer-error" style="display:none;font-size:12px;letter-spacing:0;color:#e74c3c;line-height: 11px;">' +
					'Remove the Wrapbootstrap frame' +
				'</span>' +
			'</div>' +
		'</div>' +
		'<!-- /Styles Selector -->';

	$('body').append(html);

	jQuery(document).ready(function ($) {

		$("#style-switcher h2 a").click(function (e) {
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-206px") {
				$("#style-switcher").animate({
					left: "0px"
				});
			} else {
				$("#style-switcher").animate({
					left: "-206px"
				});
			}
		});

		//Layout Switcher
		$("#layout-style").change(function (e) {
			if ($(this).val() == 1) {
				$("body").removeClass("boxed"),
					$("#header-wrapper").removeClass("boxed-hero"),
					$(window).resize();
			} else {
				$("body").addClass("boxed"),
					$("#header-wrapper").addClass("boxed-hero"),
					$(window).resize();
			}
		});

		$("#like-single-page").change(function () {
			if ($(this).prop('checked')) {
				$(document).pjax('a', '.content-wrap', {fragment: '.content-wrap'});
			} else {
				$(document).off('click', 'a')
			}
		});

		$("#resizer").change(function () {
			if ($(this).prop('checked')) {
				sessionStorage.setItem('resizerEnabled', 'enabled');
				resfunc(document);
			} else {
				top.document.querySelector('#toolbar a[data-icon="close"]').click();
			}
		});

		if (isWbIframe()) {
			$("#resizer").parent("div").on('click', function() {
				$('#resizer-error').fadeIn(500, function() {
					var self = this;
					setTimeout(function(){$(self).fadeOut(500)},5000);
				});
			});
		}

	});

})(jQuery);