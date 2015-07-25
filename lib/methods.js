Meteor.methods({
	'registerUser': function(registerData) {
		return Accounts.createUser(registerData);
	}
});


Meteor.methods({
	'loginUser': function(loginData) {
		var email = loginData.email;
		var password = loginData.password;
		console.log(this)
	}
});

