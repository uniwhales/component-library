
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import { babel } from '@rollup/plugin-babel';

export default {
    input: "./src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: 'es'
        }
    ],
    external: ['styled-components'],
    plugins: [
        commonjs(),
        peerDepsExternal(),
        resolve({preferBuiltins: true, browser: true}),
        typescript(),
        postcss({}),
        copy({
            targets: [
                { src: ['src/fonts/'], dest: 'dist' },
            ]
        }),
        uglify(),
        babel({
            exclude:'/node_modules/**',
            babelHelpers: 'bundled'
        }),
    ]
}
