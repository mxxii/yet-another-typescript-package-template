import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    plugins: [typescript()],
    output: [
      {
        dir: 'lib',
        format: 'es',
        entryFileNames: '[name].mjs',
      },
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: '[name].cjs',
      },
    ],
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: [
      {
        dir: 'lib',
        format: 'es',
        entryFileNames: '[name].d.mts',
      },
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: '[name].d.cts',
      },
    ],
  },
];
