import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  }, //Comma is for listing more than just the model, doesn't break anything by having it in Ember, might cause problems in Angular

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    save3city(paramsCity) {
      var newCity = this.store.createRecord('city', paramsCity);
      newCity.save();
      this.transitionTo('index');
    },

    update(city, paramsCity) {
      Object.keys(paramsCity).forEach(function(key) {
        if(paramsCity[key]!==undefined) {
          city.set(key, paramsCity[key]);
        }
      });
      city.save();
      this.transitionTo('index');
    },

    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});
