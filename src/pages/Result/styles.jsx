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
  place-content: center;
  align-items: center;

  background: #212E38;
  border-radius: 10px;
  justify-content: space-between;
  

  & + div {
    margin-top:16px;
  }

  img{
    height:100%;
  }
`;


export const Name = styled.section``;
export const Stops = styled.section``;
