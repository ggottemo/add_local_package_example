import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          noEmit: false,
          emitDeclarationOnly: false, // Change this to false
        },
      },
    }),
  ],
  external: [/node_modules/],
};
