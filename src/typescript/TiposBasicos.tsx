import React from 'react'

const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estado: boolean = true;

    // const poderes: string[] = [];
    const poderes: (string|number)[] = [];

    // poderes.push(1);
    // poderes.push('Velocidad');
    // poderes.push(6); 

  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre},{edad},{(estado) ? 'activo' : 'desactivo'}

        {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos