import test from 'ava';

import { add } from '../src/index.ts';

// export default { require: ['./_force-exit.mjs'] };

test('adds 1 + 2 to equal 3', (t) => {
  t.is(add(1, 2), 3);
});
