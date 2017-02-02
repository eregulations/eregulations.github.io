$(document).ready(function(e) {
	if(location.href.indexOf("tanzania") !== -1) {
		$('.logo-default').css('display', 'none');
		$('.logo-tanzania').css('display', 'block');
	}

	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	$('.cd-panel-close').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').removeClass('is-visible');
	});
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) {
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
})
