import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  partyId: DS.attr('string'),
  state: DS.attr('string'),
  bills: DS.hasMany('legislation'),

  party: computed('partyId', function() {
    switch (this.partyId) {
      case 'R':
        return 'Republican';
      case 'D':
        return 'Democrat';
      default:
        return 'Kang and Kodos';
    }
  })
});
