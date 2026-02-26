import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => {
  const isAnalyze = env.mode === "analyze";
  // const isProduction = env.mode === "production";

  return {
    // Shared Options
    base: "/genshin-guides/",
    plugins: [react(), tailwindcss()],
    resolve: { alias: { "@": resolve(__dirname, "./src") } },

    // Build Options
    build: {
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
              { name: "libs", test: /node_modules/, priority: 2 },
              { name: "app", priority: 1 },
            ],
          },
        },
      },
      // minify: isProduction ? "terser" : false,
    },
  };
});
