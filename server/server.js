Meteor.methods({
	'registerUser' : function(insertData){
 		return Accounts.createUser(insertData);
	}
});