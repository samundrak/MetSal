
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
		status.creator_id = Meteor.user()._id;
		status.creator_by = Meteor.user().profile.firstname + " " +  Meteor.user().profile.lastname;
		statusCl.insert(status, function(err) {
			if (!err) {
				return true;
			} else {
				return err.reason;
			}
		});
	}

});