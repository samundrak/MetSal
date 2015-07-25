 Template.login.events({
 	'submit .loginform': function(event) {
 		event.preventDefault();
 		var username = event.target.username.value;
 		var password = event.target.password.value;

 		console.log(username + password)
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
 	console.log(insertData);
 	Meteor.call('registerUser', insertData);

 }
 })

 function inputAuthorization(value) {
 	if (value && value.length > 0) {
 		return true;
 	} else {
 		return false;
 	}
 }

 function getInputData(event, element) {
 	return event.target[element].value;
 }