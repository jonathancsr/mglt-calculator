import React,{useContext} from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import { Container, Banner, Header,Stops,Name } from './styles'

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
              <FiChevronLeft size={16}/>
              Voltar
            </Link>
        </Header>
      <Container>
      {starship && starship.map(ship => {
        return (
          <Banner>
          <Stops>
            <p>Stops</p>
            <h1>{ship.stops}</h1>
          </Stops>
          <Name>
            <p>{ship.name}</p>
          </Name>
          <img src={starshipImg} alt="Milleniun Falcoom"/>
        </Banner>
        );
      })}

        
      </Container>
    </>
  );
}

export default Result;