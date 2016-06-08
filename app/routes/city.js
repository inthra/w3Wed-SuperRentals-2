import Ember from 'ember';

export default Ember.Route.extend({
  model(paramsCity) {
    return this.store.findRecord('city', paramsCity.city_id);
  },
  
  actions: {
    save3(paramsCity) {
      var newRental = this.store.createRecord('rental', paramsCity);
      var city = paramsCity.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', paramsCity.city);
    }
  }
});
