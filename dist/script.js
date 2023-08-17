$(function() {
	addElements();
	animateExtraElements();
});

function addElements() {
	var extraItems = 500;
	var $extraItemsWrapper = $('#extra-items');

	for (var i = 0; i < extraItems; i++) {
		$extraItemsWrapper.append('<div class="extra ' + i + '"></div>');
	}
}
	
function animateExtraElements() {

	var $items = $('.extra');

	$.each($items, function(i) {
		TweenMax.to($(this), 5, {
			delay: 0.02 * i,
			y: _.random(500, 600),
			x: _.random(200, 400),
			height: 50,
			width: 50,
			scale: 0.8,
			rotation: 360,
			ease: Power2.easeOut,
			onCompleteParams: [$(this)],
			onComplete: function($el) {
				TweenMax.to($el, 0.5, {
					rotation: _.random(-700, 500),
					x: _.random(200, 700),
					y: _.random(0, 500),
					scale: 0.6,
					// css: { backgroundColor: '#0000ff' }
				})
			}
		});
	});
}