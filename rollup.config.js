import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

module.exports = {
  input: './src/index.ts',
  output: {
    dir: './dist',
    format: 'umd',
    name: 'library',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    json(),
  ],
};
