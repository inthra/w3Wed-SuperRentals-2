import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  }, //Comma is for listing more than just the model, doesn't break anything by having it in Ember, might cause problems in Angular
});
