import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import HomeScreen from './screens/Home/HomeScreen'
import LoginScreen from './screens/Login/LoginScreen'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GlobalStyle from './shared/styles/Global.styles'
import {defaultTheme} from './shared/styles/Themes.styles'

function App() {
    return <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/' element={<HomeScreen/>}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </ThemeProvider>
}

export default App;
