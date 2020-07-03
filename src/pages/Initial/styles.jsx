import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  p {
    width: 500px;
  }

  h2 {
    font-weight: 300;
    font-size: 20px;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;

    button {
      width: 50px;
      height: 50px;
      margin-top: 24px;
      background: #f9ac34;
      border-radius: 50%;
      border: 0;
      transition: transform 0.2s;

      &:hover {
        -webkit-box-shadow: 0px 2px 15px 2px rgba(54, 134, 195, 0.7);
        -moz-box-shadow: 0px 2px 15px 2px rgba(54, 134, 195, 0.7);
        box-shadow: 0px 2px 15px 2px rgba(255, 255, 255, 0.15);
        transform: scale(1.2);
      }
    }
    p {
      font-size: 14px;
      color: #f9ac34;
      margin-bottom: 10px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: center;

  margin-bottom: 40px;
  img {
    margin-bottom: 16px;
  }
`;
