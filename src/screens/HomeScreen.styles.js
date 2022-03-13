import styled from 'styled-components'

export const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 30px;
  
  input {
    width: 80%;
    
    padding: 10px;
    background-color: ${({theme}) => theme.colors.solidGrey};
    
    font-size: 14px;
    border: 2px solid ${({theme}) => theme.colors.solidGrey};
    border-radius: 5px 0 0 5px;
    
    outline: none;
  }
  
  div {
    cursor:pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0 15px;
    
    border-radius: 0 5px 5px 0;
    background-color: ${({theme}) => theme.colors.solidGrey};
    border: 1px solid transparent;

    
    &:hover {
      border: 1px solid ${({theme}) => theme.colors.black};
    }
  }
`

export const ResultsBlock = styled.div`
  display: grid;
  margin: 40px 0;
  justify-content: center;
`