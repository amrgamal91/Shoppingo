$(document).ready(function () {
	$('#ship_to').bootstrapValidator({
			// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				full_Name: {
					validators: {
						stringLength: {
							min: 7,
              message:'please enter full name'
						},
						notEmpty: {
							message: 'Full Name Required'
						}
					}
				},
				contact_Number: {
					validators: {
						notEmpty: {
							message: 'Contact number is required'
						},
            phone:{
              // country:'KU',
              message: 'enter valid phone number'}
					}
				},
				address: {
					validators: {
            notEmpty: {
							message: 'Address is Required'
						}
					}
				},
        city: {
          validators: {
            notEmpty: {
              message: 'City is Required'
            }
          }
        }
			}
		})


		.on('success.form.bv', function (e) {
			$('#success_message').slideDown({
				opacity: "show"
			}, "slow")
			$('#ship_to').data('bootstrapValidator').resetForm();

			// Prevent form submission
			e.preventDefault();

			// Get the form instance
			var $form = $(e.target);

			// Get the BootstrapValidator instance
			var bv = $form.data('bootstrapValidator');

			// Use Ajax to submit form data
			$.post($form.attr('action'), $form.serialize(), function (result) {
				console.log(result);
			}, 'json');
		});
});
