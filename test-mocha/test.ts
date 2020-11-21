import { strict as assert } from 'assert';

import { add } from '../src';

describe("adder", () => {
  it("should add 1 + 2 to get 3", () => {
    assert.equal(add(1, 2), 3);
  });
});