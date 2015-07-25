 statusCl = new Mongo.Collection('status');

Meteor.methods({
	'registerUser': function(registerData) {
		return Accounts.createUser(registerData);
	},

	'loginUser': function(loginData) {
		var email = loginData.email;
		var password = loginData.password;
		console.log(this)
	},
	'statusPost': function(status) {

		status.created_at = new Date();
		status.created_by = Meteor.user()._id;
		statusCl.insert(status, function(err) {
			if (!err) {
				return true;
			} else {
				return err.reason;
			}
		});
	}

});