import styled from 'styled-components'

export const InputBlock = styled.div` 
  margin-top: 40px;
  
  display: flex;
  justify-content: center;
  
  input {
    width: 80%;
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
  margin-top: 40px;
`