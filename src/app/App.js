import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navb from "./components/Navb";
import CardList from "./components/CardList";
// import  Pagination  from "./components/Pagination";
import Footer from "./components/Footer";

 //Componente App donde se renderizan todos los componentes hijos

export default function App(){

    return(
        <div>
        <Navb />
        <h5 className="m-5" variant="success">¡Esta página muestra una lista de cartas de Yu Gi Oh!</h5>
        <p>Los siguientes botones mostraran las diferentes cartas, al precionar el botón "Siguiente " se mostraran en la pantalla 10 cartas, si sigues precionando "Siguiente" se mostraran 10 cartas más hasta llegar a 50 cartas.
            Y con el botón "Anterior" va a ir restando de 10 cartas.
        </p>
        <hr/>
        {/* <Pagination/> */}
        <CardList />
        <Footer />
        </div>
    );
}