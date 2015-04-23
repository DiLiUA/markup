(function($) {

	$(function() {

		$('.rf').each(function() {
			// Объявляем переменные (форма и кнопка отправки)
			var form = $(this),
				btn = form.find('.btn_submit');
			var userNameFlag = false;
			var emailFlag = false;
			var phoneFlag = false;
			var messageFlag = false;


			//Валидация поля User Name
			function validationUserName () {
				var validName = /(^[a-zA-Z]+)$/;
				var element = form.find('#user_name');
				var errorMessage = form.find('#validName');
				if (!validName.test($(element).val())) {
					errorMessage.css("display", "block");
					errorMessage.text("Name должен содержать только латинские буквы");
					errorMessage.addClass('empty_field');
					userNameFlag = false;
				} else if (element.val().length < 4) {
					errorMessage.css("display", "block");
					errorMessage.text(" Name должен содержать минимум 4 буквы");
					errorMessage.addClass('empty_field');
					userNameFlag = false;
				} else if ( !element.val() ) {
					errorMessage.css("display", "block");
					errorMessage.text(" Name can/'t be empty");
					errorMessage.addClass('empty_field');
					userNameFlag = false;
				} else{
					errorMessage.css("display", "none");
					errorMessage.removeClass('empty_field');
					userNameFlag = true;
				}
			}

			// при потере фокуса запускаем обработчик проверки на валидность поля User Name
			$('#user_name').blur(function () {
				validationUserName();
			})

			//Валидация поля E-mail
			function validationEmail () {
				var validMail = /(^[a-z0-9][\S\w]+)@([a-z]+)\.([a-z]+$)/; //pattern for e-mail
				var element =form.find('#user_email');
				var errorMessage = form.find('#valid');
				if (!validMail.test($(element).val())) {
					// errorMessage.text('sdfsf');
					errorMessage.css("display", "block");
					errorMessage.addClass('empty_field');
					emailFlag = false;
				} else{
					errorMessage.css("display", "none");
					errorMessage.removeClass('empty_field');
					emailFlag = true;
				}
			}
			// при потере фокуса запускаем обработчик проверки на валиденость поля E-mail
			$('#user_email').blur(function () {
				validationEmail();
			})

			//Валидация поля телефонного номера
			function validationPhone () {
				var validNumber = /^\+\d{12}$/; // pattern for phone number
				var element =form.find('#user_phone');
				var errorMessage = form.find('#validPhone');
				if (!validNumber.test($(element).val())) {
					errorMessage.css("display", "block");
					errorMessage.addClass('empty_field');
					phoneFlag = false;
				} else{
					errorMessage.css("display", "none");
					errorMessage.removeClass('empty_field');
					phoneFlag = true;
				}
			}

			// при потере фокуса запускаем обработчик проверки на валидность поля телефонного номера
			$('#user_phone').blur(function () {
				validationPhone();
			})

			//Валидация поля Message
			function validationMessage () {
				var element =form.find('#user_message');
				var errorMessage = form.find('#validMessage');
				if (element.val().length < 4) {
					errorMessage.css("display", "block");
					errorMessage.text(" Message должен содержать минимум 4 буквы");
					errorMessage.addClass('empty_field');
					messageFlag = false;
				} else{
					errorMessage.css("display", "none");
					element.css("background", "#fff");
					errorMessage.removeClass('empty_field');
					messageFlag = true;
				}
			}

			// при потере фокуса запускаем обработчик проверки на валидность поля Message
			$('#user_message').blur(function () {
				validationMessage();
			})

			function validform (){
				if ( userNameFlag && emailFlag && phoneFlag && messageFlag ) {
					btn.attr('disabled',false);
						if(btn.hasClass('disabled')){
							btn.removeClass('disabled')
						} 
				} else{
					btn.attr('disabled', true);
					btn.addClass('disabled');
				}
			}

			setInterval(validform,500);

			btn.click(function(){
				validform();
				if($(this).hasClass('disabled')){
					return false;
				} else {
					form.submit();
				}
			});

		});

	});

})(jQuery);