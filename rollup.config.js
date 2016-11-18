import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'index.js',
  dest: 'build/shiru.js',
  format: 'umd',
  moduleName: 'shiru',
  sourceMap: 'inline',
  plugins: [
    eslint()
  ]
};