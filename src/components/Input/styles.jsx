import styled, { css } from 'styled-components';

import ToolTip from '../ToolTip';



export const Container = styled.div`
  
  
  
  width:450px;
  height:50px;


  border-radius: 10px;
  padding:16px;

 


  
  
  
  background: #232129;
  border-radius: 10px;
  border: 2px solid #F9AC34;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }


  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
    
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    padding:10px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color:#F9AC34;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
