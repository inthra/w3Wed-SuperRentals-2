import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    update(city, paramsCity) {
      this.sendAction('update', city, paramsCity);
    },
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
