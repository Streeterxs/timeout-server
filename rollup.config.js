import path from 'path';

import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

const input = './src/server.ts';

const external = (id) => {
   return id.startsWith('.') === false && path.isAbsolute(id) === false;
};

const extensions = ['.tsx', '.ts', '.js', '.jsx', '.es6', '.es', '.mjs'];

export default [
   {
      input,
      external,
      plugins: [
         // Allows node_modules resolution
         resolve({ extensions }),

         // Allow bundling cjs modules. Rollup doesn't understand cjs
         commonjs(),

         replace({
            preventAssignment: true,
         }),

         terser(),
      ],
      output: [
         {
            file: pkg.main,
            format: 'cjs',
         },
      ],
   },
];
