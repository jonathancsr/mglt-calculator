import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  
  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:24px;
    
    button{
      width:50px;
      height:50px;
      margin-top:24px;
      background:#F9AC34;
      border-radius:50%;
      border:0;
    }
  }
`;
