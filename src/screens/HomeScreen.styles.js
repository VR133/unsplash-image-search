import styled from 'styled-components'

export const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 30px;
  
  input {
    width: 80%;
    
    padding: 5px;
    background-color: ${({theme}) => theme.colors.solidGrey};
    
    font-size: 14px;
    border: 2px solid ${({theme}) => theme.colors.solidGrey};
    border-radius: 5px;
    
    outline: none;
  }
`

export const ResultsBlock = styled.div`
  display: grid;
  margin: 40px 0;
  justify-content: center;
`