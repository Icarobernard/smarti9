import React from 'react';
import {CorpoTexto} from './style';

function Texto({children}){
    return(
      <CorpoTexto>{children}</CorpoTexto>
    );
}

export default Texto;