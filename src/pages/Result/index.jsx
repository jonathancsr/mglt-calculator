import React, { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Banner, Header, Item } from './styles';

import logo from '../../assets/mgtl-logo.svg';

import { StarshipsContext } from '../../context/StarshipsContext';

function Result() {
  const { starship } = useContext(StarshipsContext);
  return (
    <>
      <Header>
        <img src={logo} alt="MGLT Calculator" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <Container>
        {starship &&
          starship.map(ship => (
            <Banner key={ship.name}>
              <Item>
                <h1>Name</h1>
                <p>{ship.name}</p>
              </Item>
              <Item>
                {ship.stops === 0 ? (
                  <p>No stops needed</p>
                ) : (
                  <>
                    {ship.stops !== 'Unknown Data' ? <h1>Stops</h1> : ''}
                    <p>{ship.stops}</p>
                  </>
                )}
              </Item>
              <img src={ship.image} alt="Milleniun Falcoom" />
            </Banner>
          ))}
      </Container>
    </>
  );
}

export default Result;
