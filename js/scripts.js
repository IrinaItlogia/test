jQuery("document").ready(function(s){

	new WOW( {
		animateClass: 'animate__animated'
	}).init();

	$("#phone").mask("+7 (999) 999-99-99");
	
	jQuery(".header-menu-button").click (function(){
		jQuery('.header-menu').addClass('active');
	});
	
	jQuery(".close-menu").click (function(){
		jQuery('.header-menu').removeClass('active');
	});
	
	jQuery(".modal-close").click (function(){
		jQuery('.modal-wrap').fadeOut(500);
	});

	jQuery(".product .button").click (function(){
		jQuery(this).text('Добавлено!');
	});


	jQuery('#button').click(function( button ) {
		button.preventDefault();

		$('.error-input').hide();
		$('.input-block').removeClass('error');

		let error = false;

		let name = $('#name');
		let address = $('#address');
		let phone = $('#phone');
		let array = $('input')

		let loader = $('#loader');

		if (!name.val()) {
			name.siblings('.error-input').show();
			name.parent().addClass('error');
			error = true;
		} 

		if (!address.val()) {
			address.siblings('.error-input').show();
			address.parent().addClass('error');
			error = true;
		}

		if (!phone.val()) {
			phone.siblings('.error-input').show();
			phone.parent().addClass('error');
			error = true;
		}

		if (!error) {

			$('.input-block').removeClass('error');
			loader.css('display', 'flex');

			$.ajax({
				url: 'https://itlogia.ru/test/checkout',
				type: 'POST',
				data: { name: $(array[0]).val(), address: $(array[1]).val(), phone: $(array[2]).val() }
			}).done ( (mess) => {
				loader.hide();
				if (mess.success) {
					let form = $('#block3-form');
					form.html('<div class="sended">Спасибо за Ваш заказ.<span>Мы скоро свяжемся с Вами!</span>');
				} else {
					alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.');
				}
			});
		}
	});

});