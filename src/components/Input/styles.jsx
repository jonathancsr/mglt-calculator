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
    props.isFilled &&
    css`
      border-color: rgb(135,220,90);
      color: rgb(135,220,90);
  `}

  ${props =>
    props.isErrored &&
    css`
      border-color: rgb(229,17,21);
  `}

  ${props =>
    props.isFocused &&
    css`
      color: rgb(55,132,214);
      border-color: rgb(55,132,214);
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

    ${props =>
    props.isErrored &&
    css`
      color: rgb(229,17,21);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: rgb(55,132,214);
    `}
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: rgb(229,17,21);
    color: #fff;
    &::before {
      border-color:  rgb(229,17,21) transparent;
    }
  }
`;
