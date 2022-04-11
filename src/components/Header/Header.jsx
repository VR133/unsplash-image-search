import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {getUnsplashAuthURL} from '../../shared/utils/unsplash'
import Container from '../Container/Container'
import DropDown from '../DropDown/DropDown'
import {Login, LoginLogOut, Logo, StyledHeader} from './Header.styles'
import {USER_LIKES_RESET, USER_PROFILE_RESET, USER_TOKEN_RESET} from '../../shared/constants/userConstants'

const Header = () => {

    const dispatch = useDispatch()

    const loginHandler = async () => {
        window.location.href = getUnsplashAuthURL()
    }

    const logoutHandler = () => {
        dispatch({
            type: USER_PROFILE_RESET,
        })

        dispatch({
            type: USER_TOKEN_RESET,
        })

        dispatch({
            type: USER_LIKES_RESET,
        })
    }

    const userProfile = useSelector(state => state.userProfile)

    return <StyledHeader>
        <Container>
            <Logo>
                <Link to={'/'}>
                    <BsSearch/> <span>Find the perfect image!</span>
                </Link>
            </Logo>
            <LoginLogOut>
                {userProfile?.firstName
                    ? <DropDown triggerTittle={<><FaUserCircle/> <span>{userProfile.firstName}</span></>}>
                        <Link to={'/user'}>Profile</Link>
                        <div onClick={logoutHandler}>Logout</div>
                    </DropDown>
                    : <Login onClick={loginHandler}><AiOutlineUser/> Login</Login>}
            </LoginLogOut>
        </Container>
    </StyledHeader>;
};

export default Header