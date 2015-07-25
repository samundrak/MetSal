Router.configure({
	layoutTemplate: 'main'
});
Router.route('/', {
	name: 'home',
	template: 'home'
});

Router.route('/login', {
	name: 'login'
});
Router.route('/register', {
	name: 'register',
	template: 'register'
});
Router.route('/useronline');
Router.route('/userinfo');
Router.route('/userfeed');
Router.route('/useredit');

if (Meteor.isClient) {

}