import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import Cards from "./Cards";
//Componente CardList donde se optiene la lista de card con los datos requeridos como la imagen, nombre, descripcion, tipo y precio de cada card.

    export default function CardList() {

        const [cards, setCards] = useState([]) // Se usaron los hooks useState  y useEffect para monitoriar el estado del componente y checar cuando se cambia la informacion de las card.
        const [currentPage, setCurrentPage] = useState(0)
        useEffect( () => { // Actualiza la información de las cards ejecutando la funcion getCard();
            getCard();
        },
        []);

        const getCard = async() => { //Esta es la función getCard donde obtenemos la información mediante la API de Yu Gi Oh.
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=50&offset=10&view=List`; // Se almacena la url del API en variable const url
            const resp = await fetch(url); // Se obtiene la petición de url y se almacena en variable constante resp
            const {data} = await resp.json(); // 

            const tarjets = data.map(card => ({ //Aqui se optiene los datos requeridos de las card de la API usando un objeto, usando .map() para iterar sobre el json de la API 
                //Obteniendo datos pedidos en los requerimientos
                key: card.id,
                img: card.card_images[0].image_url,
                title: card.name,
                desc: card.desc,
                type: card.type,
                price: card.card_prices[0].tcgplayer_price
            }));
        
           setCards(tarjets); // Cambia el estado de las cards cuando itera sobre el arreglo
        }

        const filteredCartas = () => {
            return cards.slice(currentPage, currentPage + 50);
        }
        const nextPage = () => {
            setCurrentPage( currentPage + 10);
        }
        const prevPage = () => {
            if( currentPage > 0)
            setCurrentPage( currentPage - 10);
        }

    return (
        <>
            <Button 
            onClick={nextPage} 
            variant="outline-danger"
            >
                Anterior
            </Button>
            &nbsp;
            <Button 
            onClick={prevPage} 
            variant="outline-danger"
            >
                Siguiente
            </Button>
   
            <div className="row mt-5 justify-content-center "> 
                {filteredCartas().map(({id, img, title, desc, type, price})=> { // Usando desestructuración, se manda cada dato requerido de la API mediante props al componente Cards donde tenemos maquetado la tarjeta y se muentre en la pagina. 
                 
                return (
                    
                        <Cards 
                            key={id} 
                            img={img} 
                            title={title} 
                            desc={desc} 
                            type={type} 
                            price={price}
                    />
                    
                )
                })}
               
            </div>
        </> 
        
    );
}



  
