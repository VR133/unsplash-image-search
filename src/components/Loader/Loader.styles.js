import styled from 'styled-components'

export const StyledLoader = styled.div`
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 10px auto;

  &:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.black} transparent ${({theme}) => theme.colors.black} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`