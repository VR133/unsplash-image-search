import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './shared/styles/Themes.styles'
import GlobalStyle from './shared/styles/Global.styles'

function App() {
    return <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
            <main className='py-3'>
                <div>Header</div>
                <Routes>
                    <Route path='/' element={<div>salut</div>}/>
                </Routes>
                <div>Footer</div>
            </main>
        </BrowserRouter>
    </ThemeProvider>
}

export default App;
