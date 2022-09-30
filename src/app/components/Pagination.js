// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';

// // Se maqueto este componente obtenido de react-bootstrap para la paginación de las tarjetas que se obtenieron 

// const Pagination = (props) => {
//   // const [page, setPage] = useState([]);
//   // useEffect(() => {
//   //   getMeta();
    
//   // }, [])

//   // const getMeta = async() => { //Esta es la función getCard donde obtenemos la información mediante la API de Yu Gi Oh.
//   //   const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=10&view=List`; // Se almacena la url del API en variable const url
//   //   const resp = await fetch(url); // Se obtiene la petición de url y se almacena en variable constante resp
//   //   const {meta} = await resp.json(); // 

//   //   const paginas = meta.map(pag => ({ 
//   //       nextpage: meta.next_page,
//   //       previouspage: meta.previous_page

//   //   }));
//   //   setPage(paginas); // Cambia el estado de las paginas cuando itera sobre el arreglo
//   //   }
  
//   return (
//     <>
//     <Button variant="outline-danger">Anterior</Button>
//     &nbsp;
//     <Button variant="outline-danger">Siguiente</Button>
//     </>
    
    
//     );
// }
// export default Pagination;
