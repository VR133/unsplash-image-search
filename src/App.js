import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/Home/HomeScreen'
import LoadingScreen from './screens/Loading/LoadingScreen'
import {unsplashAuthHandler} from './shared/utils/unsplash'
import GlobalStyle from './shared/styles/Global.styles'
import {defaultTheme} from './shared/styles/Themes.styles'

axios.defaults.baseURL = process.env.REACT_APP_UNSPLASH_URL

function App() {
    return <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/callback/unsplash' element={<LoadingScreen callbackFunction={unsplashAuthHandler}/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </ThemeProvider>
}

export default App;
