import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.API.host,
  namespace: `congress/${ENV.APP.API.version}`,

  query(store, type, query) {
    let url = this.buildURL(type.modelName, null, null, 'query', query);
    return this.ajax(url, 'GET');
  },

  urlForQuery (query, modelName) {
    let baseUrl = this.buildURL();
    switch (modelName) {
      case 'representative':
        return `${baseUrl}/legislation/${query.bill}/representatives`;
      case 'statement':
        return `${baseUrl}/congress/${query.congress}/legislation/${query.bill}/statements`;
      default:
        return this._super(...arguments);
    }
  },
});
