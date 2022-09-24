import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navb from "./components/Navb";
import CardList from "./components/CardList";
import { Paginacion } from "./components/Paginacion";
 //Componente App donde se renderizan todos los componentes hijos

export default function App(){

    return(
        <div>
        <Navb />
        <CardList />
        <Paginacion />
        </div>
    );
}