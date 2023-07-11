
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import filesize from 'rollup-plugin-filesize';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

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
        resolve({preferBuiltins: true, browser: false}),
        typescript(),
        postcss({}),
        filesize(),
        copy({
            targets: [
                { src: ['src/fonts/'], dest: 'dist' },
            ]
        }),
        terser(),
        babel({
            exclude:'/node_modules',
            babelHelpers: 'bundled'
        }),
        del({ targets: 'dist/*' })
    ]
}
