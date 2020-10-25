import * as _ from 'underscore';
import { View, Application } from 'backbone.marionette';
import './coreui/dist/css/coreui.min.css';

import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

var calendarView = null;

// Create three views to simulate the main pages
const MyViewCalendar = View.extend({
    el: '#task-calendar',
    tagName: 'div',
    template: _.template('Calendar View'),
    initialize: function(options) {
	this.render();
    },
    render: function() {

	var calendar = new Calendar(this.el, {
	    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
	    headerToolbar: {
		left: 'prev,next today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
	    navLinks: true, // can click day/week names to navigate views
	    editable: true,
	    dayMaxEvents: true,
	    events: [
	    {
		id: 999,
		title: 'Repeating Event',
		start: '2020-10-09T16:00:00'
	    },
	    {
		id: 999,
		title: 'Repeating Event',
		start: '2020-10-16T16:00:00'
	    },
	    {
		title: 'Conference',
		start: '2020-10-11',
		end: '2020-10-12'
	    },
	    ]
	});
	calendar.render();
    }
});


const MyViewContact = View.extend({
  tagName: 'div',
  template: _.template(`

    <div class="card">
	<div class="card-header"><i class="fa fa-align-justify">
	    </i><b>Task List View</b></i>
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

	<p>This a simple to-do-list applicaton built to show how to use Marionette API and integrate with fullCalendar package.

    <div class="card-footer"><b>backbone.marionette ver 4.1.2</b></div>
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
    'calendar': 'CalendarPage',
    'contact': 'ContactPage',
    'about': 'AboutPage'
  },

  HomePage() {
    console.log("home page");
    calendarView = new MyViewCalendar();
    calendarVIew.render();
    //MyApp.showView(new MyViewHome());
  },

  CalendarPage() {
    console.log("calendar page");
    //MyApp.showView(new MyViewCalendar());
    calendarView.render();
  },

  ContactPage() {
    console.log("caontact page");
    MyApp.showView(new MyViewContact());
  },

  AboutPage() {
    console.log("about page");
    MyApp.showView(new MyViewAbout());
  }

});


const AppRouter = new Router() // Instance of our Router

MyApp.start()

export default { App }
