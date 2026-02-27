import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => {
  const isAnalyze = env.mode === "analyze";
  const isProduction = env.mode === "production";

  return {
    // Shared Options
    base: "/genshin-guides/",
    plugins: [
      react(/* { babel: { babelrc: false, configFile: false } } */),
      tailwindcss(),
      visualizer({
        filename: "./dist/stats.html",
        open: isAnalyze,
        template: "raw-data",
        gzipSize: true,
        brotliSize: true,
      }) as PluginOption,
    ],
    resolve: { alias: { "@": resolve(__dirname, "./src") } },

    // Build Options
    build: {
      target: "es2022",
      sourcemap: isAnalyze,
      rolldownOptions: {
        input: { main: resolve(__dirname, "index.html") },
        output: {
          assetFileNames: (chunkInfo) => {
            const name = chunkInfo.name ?? "";
            const ext = name.split(".").pop() ?? "";

            if (["css"].includes(ext)) {
              return "assets/css/[name]-[hash][extname]";
            }

            if (["eot", "ttf", "woff", "woff2"].includes(ext)) {
              return "assets/fonts/[name]-[hash][extname]";
            }

            if (["gif", "jpeg", "jpg", "png", "svg", "webp"].includes(ext)) {
              return "assets/images/[name]-[hash][extname]";
            }

            return "assets/[name]-[hash][extname]";
          },
          chunkFileNames: "chunks/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          generatedCode: { preset: "es2015" },
          advancedChunks: {
            groups: [
              {
                name: (moduleId) => {
                  if (moduleId.includes("/node_modules/genshin-db/")) {
                    return "libs-genshin-db";
                  }

                  if (moduleId.includes("/node_modules/@radix-ui/")) {
                    return "libs-radix";
                  }

                  if (
                    moduleId.includes("/node_modules/@reduxjs/toolkit/")
                    || moduleId.includes("/node_modules/react/")
                    || moduleId.includes("/node_modules/react-dom/")
                    || moduleId.includes("/node_modules/react-redux/")
                    || moduleId.includes("/node_modules/react-router/")
                  ) {
                    return "libs-react";
                  }

                  if (moduleId.includes("/node_modules/")) {
                    return "libs-other";
                  }
                },
              },
            ],
          },
        },
      },
      // minify: (isProduction || isAnalyze) ? "esbuild" : false,
      // minify: (isProduction || isAnalyze) ? "terser" : false,
      minify: (isProduction || isAnalyze) ? "oxc" : false,
      // terserOptions: { ecma: 2015 },
    },
  };
});
