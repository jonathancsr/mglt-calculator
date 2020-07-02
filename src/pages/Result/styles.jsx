import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;

  img{
    height:40px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-left: 4px;
    }
  }
`;

export const Banner = styled.div`
  width:100%;
  height: 100px;

  display: flex;
  background: #212E38;
  border-radius: 10px;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  transition: transform 0.2s;

  h1 {
    font-size:18px;
    font-weight:500;
  }

  p{
    margin-top:10px;
    font-size:20px;
    font-weight:400;
  }

  & + div {
    margin-top:16px;
  }
  
  &:hover {
      transform: translateX(10px) scale(1.05) ;
  }

  img{
    height:100%;
    border-radius: 0px 10px 10px 0px;
  }
`;


export const Name = styled.div``;

export const Stops = styled.div`
  width: 150px;
  flex-direction:column;
  display:flex;
  margin:auto 30px;
  text-align: center;
`;
