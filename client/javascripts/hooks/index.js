 Template.login.onRendered(function() {
 	$('.loginform').validate({
 		rules: {
 			password: {
 				minlength: 6,
 				required: true
 			},
 			username: {
 				minlength: 6,
 				required: true
 			}
 		}
 	});
 });
 Template.register.onRendered(function() {
 	$('.registerform').validate({
 		rules: {
 			password: {
 				minlength: 6,
 				required: true
 			},
 			username: {
 				minlength: 6,
 				required: true
 			},
 			email: {
 				required: true
 			},
 			firstname: {
 				required: true,
 				minlength: 3,
 			},
 			lastname: {
 				required: true,
 				minlength: 2,
 			}
 		}
 	});
 });
