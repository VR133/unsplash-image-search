import React from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import Container from '../Container/Container'
import {LoginLogOut, Logo, StyledHeader} from './Header.styles'
import {getUnsplashAuthURL} from '../../shared/utils/unsplash'

const Header = () => {

    const loginHandler = async () => {
        window.location.href = getUnsplashAuthURL()
    }

    return <StyledHeader>
        <Container>
            <Logo>
                <Link to={'/'}>
                    <BsSearch/> <span>Find the perfect image!</span>
                </Link>
            </Logo>
            <LoginLogOut>
                <div onClick={loginHandler}><AiOutlineUser/> Login</div>
            </LoginLogOut>
        </Container>
    </StyledHeader>;
};

export default Header