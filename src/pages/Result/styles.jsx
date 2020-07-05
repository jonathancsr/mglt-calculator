import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;

  img {
    height: 40px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #f9ac34;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.5, '#F9AC34')};
    }

    svg {
      margin-left: 4px;
    }
  }
`;

export const Banner = styled(Link)`
  width: 100%;
  height: 100px;

  text-decoration: none;
  color: #fff;

  display: flex;
  background: #bb8b42;
  border-radius: 10px;
  justify-content: space-between;
  transition: transform 0.2s;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 400;
  }

  & + a {
    margin-top: 16px;
    background: #4a4a4a;
  }

  &:hover {
    transform: translateX(10px) scale(1.05);
    -webkit-box-shadow: 0px 2px 15px 2px rgba(54, 134, 195, 0.7);
    -moz-box-shadow: 0px 2px 15px 2px rgba(54, 134, 195, 0.7);
    box-shadow: 0px 2px 15px 2px rgba(255, 255, 255, 0.15);
  }

  img {
    height: 100%;
    width: 178px;
    border: 0;
    border-radius: 0px 10px 10px 0px;
  }
`;

export const Item = styled.div`
  width: 150px;
  flex-direction: column;
  display: flex;
  margin: auto 30px;
  text-align: center;
`;
