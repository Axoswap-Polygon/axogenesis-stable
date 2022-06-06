const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.stone[900],
          to_bg: colors.slate[900],
        },
        titles: colors.slate[600],
        links: {
          txt: colors.slate[600],
          hover_txt: colors.slate[700],
        },
        loading_spinner: colors.slate[500],
        popups: {
          bg: colors.rose[400],
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.rose[500],
          border: colors.pink[500],
          hover_txt: colors.white,
          hover_bg: colors.slate[600],
          hover_border: colors.pink[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.slate[600],
        txt_input: {
          txt: colors.slate[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.pink[600],
          focus_bg: colors.slate[50],
          focus_border: colors.pink[300],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.pink[100],
        },

        // Mint widget
        token_preview: colors.slate[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
