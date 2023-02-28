import React from 'react';
import {ContainerCard, CircleBackground, Text} from './style';

function CardTecnology(props){
  return(
    <ContainerCard>
      <CircleBackground image={props.image} name={props.name}/>
      <Text>{props.name}</Text>
    </ContainerCard>
  );
}

export default CardTecnology;