import { IsoBench } from 'iso-bench';
import { add } from '../src/index.ts';

const bench = new IsoBench('My bench');
await bench
  .add('add by function', () => {
    add(1, 2);
  })
  .add('add by operator', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    1 + 2;
  })
  .consoleLog()
  .run();
