import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/home.js';
import '../../ui/pages/navbar.js';
import '../../ui/pages/app-not-found.js';
import '../../ui/pages/meals/meals.js';
import '../../ui/pages/calendars/calendars.js';

// root route
FlowRouter.route('/', {
  name: 'app.home',
  action() {
    BlazeLayout.render('app_body', { top: 'navbar', main: 'home' });
  },
});

// the app_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('app_body', { top: 'navbar', main: 'app_notFound' });
  },
};

// the route to show all the meals create by a user
FlowRouter.route('/meals', {
  name: 'app.meals',
  action() {
    BlazeLayout.render('app_body', { top: 'navbar', main: 'meals' });
  },
});

// the route to show all the calendars created by a user
FlowRouter.route('/calendars', {
  name: 'app.calendars',
  action() {
    BlazeLayout.render('app_body', { top: 'navbar', main: 'calendars' });
  },
});
