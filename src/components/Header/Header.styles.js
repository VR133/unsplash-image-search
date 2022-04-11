import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 20px;
  font-weight: bold;
  background-color: ${({theme}) => theme.colors.solidGrey};
  box-shadow: 0px 10px 20px 5px rgba(0,0,0,0.25);
  font-size: 16px;
  
  z-index: 100;
  
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  span {
    margin-left: 10px;
  }
`

export const LoginLogOut = styled.div`
  min-width: fit-content;
  margin-left: 10px;
`

export const Login = styled.div`
   &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`