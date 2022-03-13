import styled from 'styled-components'

export const StyledContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${({theme}) => theme.width.viewport};
`