// --- Change Blend Modes --- //
$('#initial').click(function() {
	$('.circle').attr('class', 'circle blend-mode-initial');
});

$('#inherit').click(function() {
	$('.circle').attr('class', 'circle blend-mode-inherit');
});

$('#unset').click(function() {
	$('.circle').attr('class', 'circle blend-mode-unset');
});

$('#multiply').click(function() {
	$('.circle').attr('class', 'circle blend-mode-multiply');
});

$('#screen').click(function() {
	$('.circle').attr('class', 'circle blend-mode-screen');
});

$('#overlay').click(function() {
	$('.circle').attr('class', 'circle blend-mode-overlay');
});

$('#darken').click(function() {
	$('.circle').attr('class', 'circle blend-mode-darken');
});

$('#lighten').click(function() {
	$('.circle').attr('class', 'circle blend-mode-lighten');
});

$('#color-dodge').click(function() {
	$('.circle').attr('class', 'circle blend-mode-color-dodge');
});

$('#color-burn').click(function() {
	$('.circle').attr('class', 'circle blend-mode-color-burn');
});

$('#hard-light').click(function() {
	$('.circle').attr('class', 'circle blend-mode-hard-light');
});

$('#soft-light').click(function() {
	$('.circle').attr('class', 'circle blend-mode-soft-light');
});

$('#difference').click(function() {
	$('.circle').attr('class', 'circle blend-mode-difference');
});

$('#exclusion').click(function() {
	$('.circle').attr('class', 'circle blend-mode-exclusion');
});

$('#hue').click(function() {
	$('.circle').attr('class', 'circle blend-mode-hue');
});

$('#saturation').click(function() {
	$('.circle').attr('class', 'circle blend-mode-saturation');
});

$('#color').click(function() {
	$('.circle').attr('class', 'circle blend-mode-color');
});

// --- Toggle Background --- //
$('#background').click(function() {
	if ($('body').hasClass('checked')) {
			$('body').removeClass('checked');
		} else {
			$('body').addClass('checked');
		}
});