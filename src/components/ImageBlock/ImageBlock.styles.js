import styled from 'styled-components';
import {mixin} from '../../shared/styles/Mixin.styles'

export const StyledImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const StyledActionsBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  
  visibility: hidden;

  transition: visibility 0.1s linear, background-color 0.1s linear;
  will-change: visibility, background-color;
`

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-height: 500px;
  object-fit: cover;
`

export const LikeButtonBlock = styled.div`
  display: flex;
  justify-content: end;  
`

export const LikeUnlikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  padding: 5px;
  
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 3px;
  
  opacity: 0.75;
  
  transition: opacity 0.1s linear;
  will-change: opacity;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 25px;
    height: 25px;
  }
`

export const Image = styled.div`
  position: relative;
  
   &:hover {
     ${StyledActionsBlock} {
      visibility: inherit;
      background-color: ${mixin.fade(({theme}) => theme.colors.black, 0.8)} 
    }
  }
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