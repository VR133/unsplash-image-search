import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './shared/styles/Themes.styles'
import GlobalStyle from './shared/styles/Global.styles'
import HomeScreen from './screens/HomeScreen'

function App() {
    return <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <BrowserRouter>
            <div>Header</div>
            <main>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                </Routes>
            </main>
            <div>Footer</div>
        </BrowserRouter>
    </ThemeProvider>
}

export default App;
