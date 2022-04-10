import React, {useEffect} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/Home/HomeScreen'
import LoadingScreen from './screens/Loading/LoadingScreen'
import {unsplashAuthHandler} from './shared/utils/unsplash'
import {getUserProfile} from './shared/actions/userActions'
import GlobalStyle from './shared/styles/Global.styles'
import {defaultTheme} from './shared/styles/Themes.styles'

axios.defaults.baseURL = process.env.REACT_APP_UNSPLASH_API_URL

function App() {

    const dispatch = useDispatch()
    const userToken = useSelector(state => state.userToken)

    useEffect(function () {
        if (userToken?.accessToken) {
            // dispatch(getUserProfile())
        }
    }, [userToken])

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
