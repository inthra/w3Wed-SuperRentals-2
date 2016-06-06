import Model from 'ember-data/model';

export default Model.extend({
  owner: .attr(),
  city: .attr(),
  type: .attr(),
  image: .attr(),
  bedrooms: .attr()
});
