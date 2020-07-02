import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  
  img{
    margin-bottom:10px;
  }

  h2{
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    font-size: 20px;
  }
  
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
      transition: transform 0.2s;

      &:hover{
        background:rgb(55,132,214);
        transform: scale(1.2) ;
      }
    }
  }
`;
