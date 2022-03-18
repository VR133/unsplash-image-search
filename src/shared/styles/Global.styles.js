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

input {    
  padding: 10px;
  background-color: ${({theme}) => theme.colors.solidGrey};
    
  font-size: 14px;
  border: 2px solid ${({theme}) => theme.colors.solidGrey};
  border-radius: 5px 0 0 5px;
  
  outline: none;
}

button {
  padding: 10px 20px;
}

a {
  color: ${({theme}) => theme.colors.black};
  text-decoration: none;
}
`

export default GlobalStyle