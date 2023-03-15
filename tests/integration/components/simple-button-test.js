/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | simple-button-test', function (hooks) {
  setupRenderingTest(hooks);

  test('should show icon and label', async function (assert) {
    await render(hbs`
      <SimpleButton
        @icon="face"
        @label="Hello world!"
      />
    `);

    assert.strictEqual(
      this.element.querySelector('.material-cions').textContent().trim(),
      'face',
      'The user sees the correct icon.'
    );

    
  });
});
