import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: ${({theme}) => theme.colors.black};

  display: grid;
  min-height: 100vh;
}

#root {
  display: flex;
  flex-direction: column;
  
  main {
    flex: 1;
  }
}

* {
  margin: 0;
  box-sizing: border-box;
}
`

export default GlobalStyle