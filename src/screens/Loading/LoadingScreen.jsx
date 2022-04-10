import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import {StyledLoadingScreen} from './LoadingScreen.styles'

const LoadingScreen = ({callbackFunction}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (typeof callbackFunction === 'function') {
        const locationSearchParams = new URLSearchParams(window.location.search)
        callbackFunction({dispatch, locationSearchParams, navigate})
    }

    return <StyledLoadingScreen>
        <Loader/>
    </StyledLoadingScreen>
};

export default LoadingScreen