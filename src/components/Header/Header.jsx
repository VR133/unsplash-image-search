import React from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import Container from '../Container/Container'
import {LoginLogOut, Logo, StyledHeader} from './Header.styles'

const Header = () => {
    return <StyledHeader>
        <Container>
            <Logo>
                <BsSearch/> <span>Find the perfect image!</span>
            </Logo>
            <LoginLogOut>
                <AiOutlineUser/> <Link to={'/login'}>Login</Link>
            </LoginLogOut>
        </Container>
    </StyledHeader>;
};

export default Header