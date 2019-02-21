import Controller from '@ember/controller';

// Bug in ember-paper prevents button events from bubbling.
// TODO: Fix upstream and upgrade ember-paper.
export default Controller.extend({
  actions: {
    follow(link) {
      window.location.replace(link);
    }
  }
});
