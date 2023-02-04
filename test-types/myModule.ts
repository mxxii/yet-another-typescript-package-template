import { expectTypeOf } from 'expect-type';

import { add } from '../src/myModule';

expectTypeOf(add).toEqualTypeOf<(a: number, b: number) => number>();
