import React,{useContext} from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import { Container, Banner, Header, Item } from './styles'

import logo from '../../assets/mgtl-logo.svg'
import starshipImg from '../../assets/starships/milenium.jpg'

import { StarshipsContext } from '../../context/StarshipsContext';

function Result(){
  const {starship} = useContext(StarshipsContext)
  return(
    <>
      <Header>
          <img src={logo} alt="MGLT Calculator" />
            <Link to="/">
              <FiChevronLeft size={20}/>
              Voltar
            </Link>
        </Header>
      <Container>
        {starship && starship.map(ship => {
          return (
            <Banner key={ship.name}>
              <Item>
                <h1>Stops</h1>
                <p>{ship.stops === 0 ? "No stops needed" : ship.stops}</p>
              </Item>
              <Item>
                <h1>Name</h1>
                <p>{ship.name}</p>
              </Item>
              <img src={starshipImg} alt="Milleniun Falcoom"/>
            </Banner>
          );
        })}
      </Container>
    </>
  );
}

export default Result;