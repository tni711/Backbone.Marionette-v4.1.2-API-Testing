import Marionette from 'backbone.marionette';
import template from 'templates/item';
import * as _ from 'underscore';

export default Marionette.View.extend({
  tagName: 'h1',
  template: _.template('The Home page')
});
