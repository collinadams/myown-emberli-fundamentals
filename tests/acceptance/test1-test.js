import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test1');

test('my acceptance test', async function(assert) {
  await visit('/');
  assert.equal(currentURL(), '/', 'foo');
  assert.ok(find('.course-list-item').length > 2, 'Some courses on the screen'); 

  await click('.course-list-item[data-name="Ember-CLI Basics"] a');

  assert.equal(currentRouteName(), 'course', 'On the course page');
  assert.ok(find('li.stage').length > 2, 'Some stages on the screen'); 

  await click('ul li:first-child a');
  assert.equal(currentRouteName(), 'course-stage', 'On the stage page');

});
