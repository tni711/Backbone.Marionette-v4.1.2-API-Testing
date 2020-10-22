import * as _ from 'underscore';
import { View, Application } from 'backbone.marionette';

// Create three views to simulate the main pages
const MyViewHome = View.extend({
  tagName: 'h1',
  template: _.template('Backbone.Marionette v4.1.2 Testing')
});

const MyViewContact = View.extend({
  tagName: 'h1',
  template: _.template('The Contact page')
});

const MyViewAbout = View.extend({
  tagName: 'h1',
  template: _.template('Built with Webpack v4.29.6')
});

// Create Marionette Application
const App = Application.extend({
  region: '#main-content',

  onStart() {
    Backbone.history.start();
  }
});

const MyApp = new App(); // Instance of our Application

// Create a simple Router to manage three routes
var Router = Backbone.Router.extend({

  routes: {
    '': 'HomePage',
    'contact': 'ContactPage',
    'about': 'AboutPage'
  },

  HomePage() {
    MyApp.showView(new MyViewHome());    // showView to display view
  },

  ContactPage() {
    MyApp.showView(new MyViewContact()); // showView to display view
  },

  AboutPage() {
    MyApp.showView(new MyViewAbout());   // showView to display view
  }

});


const AppRouter = new Router() // Instance of our Router

MyApp.start()

export default MyApp
