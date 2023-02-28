import React from 'react';
import Texto from '../Texto';
import {TextoTitulo} from './style';

function Titulo({children}){
    return(
      <TextoTitulo >{children}</TextoTitulo>
    );
}

export default Titulo;