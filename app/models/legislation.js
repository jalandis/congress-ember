import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('string'),
  slug: DS.attr('string'),
  congress: DS.attr('number'),
  chamber: DS.attr('string'),
  url: DS.attr('string'),
  sponsors: DS.hasMany('representitive'),

  image: computed('chamber', function() {
    if (this.chamber == 'house') {
      return '/assets/images/us_house.jpg';
    } else {
      return '/assets/images/us_senate.png';
    }
  })
});
