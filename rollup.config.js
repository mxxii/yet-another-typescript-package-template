import typescript from '@rollup/plugin-typescript';

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
];
