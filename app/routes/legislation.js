import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let store = this.store;
    return store.find('legislation', params.bill_id).then(function(bill) {
      return hash({
        bill: bill,
        sponsors: store.query('representative', { bill: bill.id }),
        statements: store.query('statement', { bill: bill.id })
      });
    });
  }
});
