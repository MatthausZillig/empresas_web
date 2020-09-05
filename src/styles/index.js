import { createGlobalStyle } from 'styled-components';

const theme = {
  grid: {
    l: '30rem',
    s: '11rem',
  },
  colors: {
    primary: '#57bbbc',
    secondary: '#1a0e49',
    text: '#383743',
    background: '#ebe9d7',
    gray: '#d8d8d8',
    'warm-grey': '#8d8c8c',
    white: '#fff',
  },
  borderRadius: '0.6rem',
  spacing: {
    xs: '0.4rem',
    s: '0.8rem',
    m: '1.2rem',
    l: '5rem',
    xl: '12rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  font: {
    fontFamily: 'Roboto',
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '0.5rem',
      small: '0.7rem',
      medium: '1.8rem',
      large: '1.2rem',
      xlarge: '1.6rem',
    },
  },
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
};

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main[data-js="app"] {
    display: flex;
    justify-content: center;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
  }

  body{
    font-family: ${theme.font.fontFamily};
    background: ${theme.colors.background};
  }
`;

export { GlobalStyle, theme };
