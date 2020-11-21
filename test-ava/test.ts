import test from 'ava';

import { add } from '../src';

test('adds 1 + 2 to equal 3', (t) => {
  t.is(add(1, 2), 3);
});
