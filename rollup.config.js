import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/animajs.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/animajs.esm.js',
      format: 'es'
    },
    {
      file: 'dist/animajs.umd.js',
      format: 'umd',
      name: 'AnimaJS'
    }
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
};
