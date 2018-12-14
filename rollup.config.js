const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

const pkg = require('./package.json')

module.exports = [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
      })
    ]
  },

  // Node.js Common JS
  {
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies || {}),
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: [
          ['@babel/preset-env', {
            modules: false
          }]
        ]
      })
    ],
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    }
  },

  // ES Next
  {
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies || {}),
    plugins: [
      resolve(),
      commonjs()
    ],
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    }
  }
]