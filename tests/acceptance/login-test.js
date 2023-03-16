import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-quickstart/tests/helpers';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');

    assert.strictEqual(currentURL(), '/login');
  });
});
