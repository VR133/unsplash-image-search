import styled from 'styled-components'
import {devices} from '../../../../shared/styles/Themes.styles'

export const InputBlock = styled.div` 
  display: flex;
  justify-content: center;
  position: relative;
  margin: 40px auto 0;
  width: 80%;
      
  ${devices.tablet} {
    width: 100%;
  } 
`

export const StyledSearchInput = styled.div` 
  flex: 1;
    
  input {        
    width: 100%;
    border-radius: 5px 0 0 ${({roundedBottom}) => roundedBottom ? '5px' : '0'};
  }
`

export const SearchBtn = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  background-color: ${({theme}) => theme.colors.solidGrey};
  border: 1px solid transparent;
  border-radius: 0 5px ${({roundedBottom}) => roundedBottom ? '5px' : '0'} 0;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.black};
  }
`

export const Suggestions = styled.div`
  cursor: pointer;
  z-index: 50;
  
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  
  background-color: ${({theme}) => theme.colors.grey};
  border-radius: 0 0 5px 5px;

  will-change: background-color;
  
  div {
    padding: 10px;
    
    will-change: background-color;

    transition: all ease-in-out 300ms;

    &:hover {
      background-color: ${({theme}) => theme.colors.solidGrey};
    }
  }
`