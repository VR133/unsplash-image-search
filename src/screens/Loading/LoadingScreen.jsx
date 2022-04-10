import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import {StyledLoadingScreen} from './LoadingScreen.styles'

const LoadingScreen = ({callbackFunction}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(async function () {
        if (typeof callbackFunction === 'function') {
            const locationSearchParams = new URLSearchParams(window.location.search)
            await callbackFunction({dispatch, locationSearchParams})
        }

        navigate('/')
    }, [])

    return <StyledLoadingScreen>
        <Loader/>
    </StyledLoadingScreen>
};

export default LoadingScreen