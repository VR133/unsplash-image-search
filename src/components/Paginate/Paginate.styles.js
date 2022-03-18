import styled from 'styled-components'

export const StyledPaginate = styled.div`
  display: flex;
  justify-content: center;
`

export const PaginationElement = styled.div`
  padding: 0 4px;

  ${({active}) => active && `
    text-decoration: underline;
  `}
    
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`