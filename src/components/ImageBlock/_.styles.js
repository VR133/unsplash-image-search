import styled from 'styled-components';

export const StyledImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const StyledImage = styled.img`
  width: 100%;
`

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }
`

export const StyledTags = styled.div`
  display: flex;
  margin: 10px;
`