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

    assert
      .dom('[data-test-icon]')
      .hasText('face', 'The user sees the correct icon');

    assert
      .dom('[data-test-label]')
      .hasText('Hello world!', 'The user sees the correct label');
  });
});
