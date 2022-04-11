import styled from 'styled-components';

export const StyledDropDown = styled.div`
  position: relative;
`

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  * {
    margin-right: 5px;
    
    &:last-child {
      margin-right: 0;
    } 
  }
  
  &:hover {
    text-decoration: underline;
  }
`

export const DropDownItems = styled.div`
  display: grid;
  padding: 10px 20px;
  
  position: absolute;
  bottom: -5px;
  left: 50%;
  
  transform: translate(-50%, 100%);
  
  background-color: ${({theme}) => theme.colors.white};
  -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.1); 
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.1);
  
  * {
    margin-bottom: 10px;
        
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    
    &:last-child {
      margin-bottom: 0;
    } 
  }
`