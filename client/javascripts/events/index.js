
 Template.header.events({
 	'click .logout': function(event) {
 		Meteor.logout(function(err) {
 			if (!err) {
 				Router.go('login');
 			} else {
 				msgBox(err.reason);
 			}
 		});
 	}
 });
 Template.login.events({
 	'submit .loginform': function(event) {
 		event.preventDefault();
 		var username = event.target.username.value;
 		var password = event.target.password.value;
 		Meteor.loginWithPassword(username, password, function(err) {
 			if (err) {
 				msgBox(err.reason)
 			} else {
 				Router.go('home')
 			}
 		});
 		// Meteor.call('loginUser',{email:username,password:password},function(error,result){
 		// 	console.log(error);
 		// 	console.log(result);
 		// })
 	}
 })

 Template.register.events({
 	'submit .registerform': function(event) {
 		event.preventDefault();
 		var fields = ["username", "password", "email", "firstname", "lastname", "gender"];
 		var data = [];
 		fields.forEach(function(element, index) {
 			data.push(getInputData(event, element));
 		});
 		var insertData = {};
 		insertData.profile = {};
 		var validationPass;
 		data.some(function(element, index) {
 			if (!inputAuthorization(element)) {
 				alert(fields[index] + ' is empty');
 				validationPass = false;
 				return true;
 			} else {
 				if (fields[index] === 'username' || fields[index] === 'password' || fields[index] === 'email') {
 					insertData[fields[index]] = data[index];
 				} else {
 					insertData.profile[fields[index]] = data[index];
 				}

 			}
 			validationPass = true;

 		});
 		if (!validationPass) return false;
 		Meteor.call('registerUser', insertData, function(error, result) {
 			if (error) {
 				msgBox(error.reason)
 			} else {
 				msgBox('Login Successfull!')
 				Router.go('login');
 			}
 		});

 	}
 })

