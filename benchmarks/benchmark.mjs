import { IsoBench } from 'iso-bench';
import { add } from '../lib/index.mjs';

const bench = new IsoBench('My bench');
bench
  .add('add by function', () => {
    add(1, 2);
  })
  .add('add by operator', () => {
    1 + 2;
  })
  .consoleLog()
  .run();
