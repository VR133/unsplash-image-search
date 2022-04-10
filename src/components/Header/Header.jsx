import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {getUnsplashAuthURL} from '../../shared/utils/unsplash'
import Container from '../Container/Container'
import {LoginLogOut, Logo, StyledHeader} from './Header.styles'

const Header = () => {

    const loginHandler = async () => {
        window.location.href = getUnsplashAuthURL()
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
                    ? <Link to={'/user'}>{userProfile.firstName}</Link>
                    : <div onClick={loginHandler}><AiOutlineUser/> Login</div>}
            </LoginLogOut>
        </Container>
    </StyledHeader>;
};

export default Header