import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import {StyledLoadingScreen} from './LoadingScreen.styles'

const LoadingScreen = ({callbackFunction}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (typeof callbackFunction === 'function') {
        callbackFunction({dispatch})
    } else {
        navigate('/')
    }

    return <StyledLoadingScreen>
        <Loader/>
    </StyledLoadingScreen>
};

export default LoadingScreen