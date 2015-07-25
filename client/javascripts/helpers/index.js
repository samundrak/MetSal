Template.userinfo.helpers({
	basicinfo: function() {
		console.log(Meteor.user())
		return Meteor.user();
	},

	email: function() {
		return Meteor.user().emails[0].address;
	},

	gender: function() {
		return (Meteor.user().profile.gender) === 0 ? 'Male' : 'Female';

	}
});

Template.header.helpers({
	username: function() {
		return Meteor.user().username;
	}
})
Template.userfeed.helpers({
	feeds: function() {
		var posts =statusCl.find({creator_id:Meteor.user()._id}, {sort: {created_at: -1}}).fetch();
		console.log(posts);
		return posts;
	}
})