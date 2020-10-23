import * as _ from 'underscore';
import { View, Application } from 'backbone.marionette';
import './coreui/dist/css/coreui.min.css';


// Create three views to simulate the main pages
const MyViewHome = View.extend({
  tagName: 'div',
  template: _.template('Backbone.Marionette v4.1.2 Testing')
});

const MyViewContact = View.extend({
  tagName: 'div',
  template: _.template(`

    <div class="card">
	<div class="card-header"><i class="fa fa-align-justify">
	    </i><b>Contact Information</b></i>
	    <div class="card-header-actions">
		<a id="Contactform_create" class="card-header-action" href="#">Add</a>
	    </div>
	</div>

	<div class="card-body">
	    <div class="table-responsive">
		<table class="table table-bordered table-condensed">
		<thead>
		    <tr>
		    <th width="20%" style="text-align:left;">Name</th>
		    <th width="20%" style="text-align:left;">Title</th>
		    <th width="60%" style="text-align:left;">Address</th>
		    </tr>
		</thead>
		<tbody id="ContactrowDIV">
		    <tr>
		    <td width="20%" style="text-align:left;">Peter</td>
		    <td width="20%" style="text-align:left;">Programmer</td>
		    <td width="60%" style="text-align:left;">Software Ave, Cloud City</td>
		    </tr>
		    <tr>
		    <td width="20%" style="text-align:left;">Paul</td>
		    <td width="20%" style="text-align:left;">Manager</td>
		    <td width="60%" style="text-align:left;">Software Ave, Cloud City</td>
		    </tr>
		    <tr>
		    <td width="20%" style="text-align:left;">Mary</td>
		    <td width="20%" style="text-align:left;">Business</td>
		    <td width="60%" style="text-align:left;">Software Ave, Cloud City</td>
		    </tr>
		</tbody>
		</table>
	    </div>

	    </div>
	</div>
    </div>
  `)

});

const MyViewAbout = View.extend({
  tagName: 'div',
  template: _.template(`
    <div class="card">
    <div class="card-header"><b>About Backbone.Marionette</b></div>
    <div class="card-body">

	<p>This application covers the basic usage patterns and concepts of Marionette. This covers the usage of collection view.
	A CollectionView like View manages a portion of the DOM via a single parent DOM element or el. This view manages an ordered set of child views that are shown within the view's el. These children are most often created to match the models of a Backbone.Collection though a CollectionView does not require a collection and can manage any set of views.</p>

    <div class="card-footer"><b>ver 4.1.2</b></div>
    </div>
    `)
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

export default { App }
