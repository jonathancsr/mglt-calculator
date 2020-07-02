import React, {createContext, useCallback, useState} from 'react';
import api from '../services/Api';
import Awing from '../assets/starships/a-wing.png';
import arc170 from '../assets/starships/acr-170.jpeg';
import BWing from '../assets/starships/b-wing.jpeg';
import CalamariCruiser from '../assets/starships/calamari-cruiser.jpeg';
import Cr90 from '../assets/starships/cr90-corvette.jpg';
import Ef76 from '../assets/starships/ef76.png';
import Executor from '../assets/starships/executor.png';
import ImperialShuttle from '../assets/starships/imperial-shuttle.jpg';
import milenium from '../assets/starships/milenium.jpg';
import RebelTransport from '../assets/starships/rebel-transport.jpg';
import SentinelClass from '../assets/starships/sentinel-class.jpg';
import Slave1 from '../assets/starships/slave-1.jpg';
import TieAdvancedX1 from '../assets/starships/tie-advanced-x1.jpg';
import XWing from '../assets/starships/x-wing.jpg';
import YWing from '../assets/starships/Y-wing.jpeg';
import DeathStar from '../assets/starships/death-star.jpeg';
import StarDestroyer from '../assets/starships/star-destroyer.jpeg';
import RepublicCruiser from '../assets/starships/republic-cruiser.png';
import DroidControl from '../assets/starships/droid-control.jpg';
import NabooFighter from '../assets/starships/naboo-fighter.jpg';
import NabooRoyal from '../assets/starships/naboo-royal.jpeg';
import Scimitar from '../assets/starships/scimitar.jpg';
import JTypeDiplomatic from '../assets/starships/j-type-diplomatic.jpg';
import AA9 from '../assets/starships/AA-9-Coruscant.jpg';
import JediStarfighter from '../assets/starships/jedi-starfighter.jpg';
import HTypeNubiam from '../assets/starships/h-type-nubiam.png';
import RepublicAssault from '../assets/starships/republic-assault.jpeg';
import RepublicAttack from '../assets/starships/republic-attack.jpeg';
import NabooStar from '../assets/starships/naboo-star.jpeg';
import BankingClan from '../assets/starships/banking-clan.jpeg';
import Belbullab from '../assets/starships/belbullab-22.jpeg';
import VWing from '../assets/starships/V-wing.jpg';
import SolarSailer from '../assets/starships/solar-sailer.jpg';
import DefaultImage from '../assets/starships/starwars.jpg';

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
    case'hour':
    case'hours':
      return number;
    default:
     return 0;
  } 
}

function getImage(naveName){
  switch (naveName) {
    case 'TIE Advanced x1':
      return TieAdvancedX1;
    case 'Y-wing':
      return YWing;
    case 'B-wing':
      return BWing;
    case 'X-wing':
      return XWing;
    case 'A-wing':
      return Awing;
    case 'Sentinel-class landing craft':
      return SentinelClass;
    case 'Slave 1':
      return Slave1;
    case 'Imperial shuttle':
      return ImperialShuttle;
    case 'Rebel transport':
      return RebelTransport;
    case 'Millennium Falcon':
      return milenium;
    case 'Death Star':
      return DeathStar;
    case 'CR90 corvette':
      return Cr90;
    case 'EF76 Nebulon-B escort frigate':
      return Ef76;
    case 'Star Destroyer':
      return StarDestroyer;
    case 'Calamari Cruiser':
      return CalamariCruiser;
    case 'Executor':
      return Executor;
    case 'arc-170':
      return arc170;
    case 'Republic Cruiser':
      return RepublicCruiser;
    case 'Droid control ship':
      return DroidControl;
    case 'Naboo fighter':
      return NabooFighter;
    case 'Naboo Royal Starship':
      return NabooRoyal;
    case 'Scimitar':
      return Scimitar;
    case 'J-type diplomatic barge':
      return JTypeDiplomatic;
    case 'AA-9 Coruscant freighter':
      return AA9;
    case 'Jedi starfighter':
      return JediStarfighter;
    case 'H-type Nubian yacht':
      return HTypeNubiam;
    case 'Republic Assault ship':
      return RepublicAssault;
    case 'Republic attack cruiser':
      return RepublicAttack;
    case 'Naboo star skiff':
      return NabooStar;
    case 'Banking clan frigte':
      return BankingClan;
    case 'Belbullab-22 starfighter':
      return Belbullab;
    case 'V-wing':
      return VWing;
    case 'Solar Sailer':
      return SolarSailer;
    default:
      return DefaultImage;
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
    
    while (response.data.next) {
      response = await api.get(response.data.next);
      response.data.next = response.data.next !== null ? response.data.next.replace('http','https') : null;
      response.data.results.map(ship => {
        ship.consumableHours = getHoursOfConsumable(ship.consumables);
        ship.mgtlMaxDistance = ship.consumableHours * (ship.MGLT !== 'unknown' ? ship.MGLT : 0);
        ship.image = getImage(ship.name);
        return starshipsResponse.push(ship);
      });
    }
    localStorage.setItem('@MGTL:starships',JSON.stringify(starshipsResponse));
    
    setStarship(starshipsResponse);

  },[]) 

  const getSpaceshipsStopsInOrder = useCallback((distance) => {
    let ships = starship;
    distance = parseInt(distance);
    ships.map(ship =>{
      ship.stops = ship.mgtlMaxDistance  !== 0 ?  Math.trunc(distance /ship.mgtlMaxDistance) : "Unknown Data";
      return ship; 
    })

    ships.sort((a, b) => {
      if(a.stops === "Unknown Data" || b.stops === "Unknown Data")
        return 1;
      return(a.stops - b.stops);
    });
    
    setStarship(ships);
  },[starship])
  

  return (
    <StarshipsContext.Provider value={{starship, getStarships, getSpaceshipsStopsInOrder}}>
      {children}
    </StarshipsContext.Provider>
  )
}