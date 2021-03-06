$(document).ready(function() {
	// Highlighted Radio
	$('input[type=radio]').change(function() {
		var tmp = $(this).attr('name');
    	$('input[name="'+tmp+'"]').parent('label').removeClass('selected');
		$(this).closest('label').toggleClass('selected', this.selected);
	});

	$('label.star').click(function() {
		$('.widget-hidden').slideDown(100);
	});

	$('.close').click(function() {
		$('.widget-wrapper').fadeOut(100);
	});

	// Submit a review
	$('button.primary').click(function (event) {
		event.preventDefault();

		var errors = [];

		$('input:text, textarea').each(function() {
			if ($(this).val() == '') {
				var fieldname = $(this).attr('name');
				errors.push(fieldname);
			}
		});

		if(errors.length !== 0) {
			$('.widget-body').prepend('<div class="errors">Please fill in all fields</div>');
		} else {
			$('.widget-body').height($('.widget-body').height());
			$('.widget-body').html('<div class="success"><img src="images/checkmark.jpg" class="success-icon" /></div>');
			$('.success-icon').delay(200).queue(function(next){
				$(this).addClass('open');
				$(this).after($('<h3>Thank you for your feedback!</h3>').fadeIn(500));
				setTimeout(function () {
		        $('.widget-wrapper').fadeOut(100);
		    }, 3000);
			});
		}
	});
});
