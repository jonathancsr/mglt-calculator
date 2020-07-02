import React, {createContext, useCallback, useState} from 'react';
import api from '../services/Api';

export const StarshipsContext = createContext({});

function getHoursOfConsumable(consumables) {
  let [number,type] = consumables.split(' ');
  number = parseInt(number);
 
  switch (type) { 
    case 'year':
    case 'years':
      return (number * 8760);
    case 'month':
    case 'months':
      return (number * 730);
    case 'week':
    case 'weeks':
      return (number * 168);
    case 'day':
    case 'days':
      return (number * 24);
    default:
     return 0;
  } 
}

export const StarshipProvider = ({children})  =>{
  
  const [starship, setStarship] = useState(()=>{
    const localStarships = localStorage.getItem('@MGTL:starships');

    if(localStarships)
      return JSON.parse(localStarships);

    return [];
  });
 
  const getStarships = useCallback(async() => {
    let starshipsResponse = [];
    let response = {
      data:{
        next:"/starships/"
      }
    };
    if(starship.size === 0)
    {
      while (response.data.next) {
        response = await api.get(response.data.next);
        response.data.results.map(ship => {
          ship.consumableHours = getHoursOfConsumable(ship.consumables);
          ship.mgtlMaxDistance =
            ship.consumableHours * (ship.MGLT !== 'unknown' ? ship.MGLT : 0);
          starshipsResponse.push(ship);
        });
      }
      localStorage.setItem('@MGTL:starships',JSON.stringify(starshipsResponse));
    }
    setStarship(starshipsResponse);

  },[]) 


  const getSpaceshipsStopsInOrder = useCallback((distance) => {
    let ships = starship;
    distance = parseInt(distance);
    ships.map(ship =>{
      ship.stops = (ship.mgtlMaxDistance / distance);
    })
    ships.sort((a, b) => b.stops-a.stops);
    setStarship(ships);
  },[])
  
  return (
    <StarshipsContext.Provider value={{starship, getStarships, getSpaceshipsStopsInOrder}}>
      {children}
    </StarshipsContext.Provider>
  )
}