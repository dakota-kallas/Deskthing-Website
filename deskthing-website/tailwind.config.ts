import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        Wingding: ['THEBOLDFONT', 'sans-serif'],
        geistMono: ['GeistMono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
