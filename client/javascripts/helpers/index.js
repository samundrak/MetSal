Template.userinfo.helpers({
			basicinfo: function() {
				console.log(Meteor.user())
				return Meteor.user();
			},

			email: function() {
				return Meteor.user().emails[0].address;
			},

			gender: function() {
				return (Meteor.user().profile.gender ) === 0 ? 'Male' : 'Female';


			}
});