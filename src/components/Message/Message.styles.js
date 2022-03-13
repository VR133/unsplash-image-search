import styled from 'styled-components'

export const StyledMessage = styled.div`
  text-align: center;
    
  ${({error}) => error && `
    color: red;
  `}
`