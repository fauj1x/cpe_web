import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "layer-1": "url(/layer-1.jpg)",
        "layer-2": "url(/layer-2.png)",
        "layer-3": "url(/layer-3.png)",
        "layer-4": "url(/layer-4.png)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        '10xl': '1280px', // Menambahkan ukuran max-w-10xl
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};

export default config;
