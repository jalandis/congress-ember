import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click } from '@ember/test-helpers';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('should navigate to legislation details', async function(assert) {
    await visit('/');
    await click('md-card a');

    const title = this.element.querySelector('md-toolbar h2').textContent;
    assert.ok(title.includes('ProPublica Congress API Explorer'));
  });
});
