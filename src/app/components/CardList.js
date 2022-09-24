import React, {useState, useEffect} from "react";
import Cards from "./Cards";
//Componente CardList donde se optiene la lista de card con los datos requeridos como la imagen, nombre, descripcion, tipo y precio de cada card.

    export default function CardList() {

        const [cards, setCards] = useState([]) // Se usaron los hooks useState  y useEffect para monitoriar el estado del componente y checar cuando se cambia la informacion de las card.
        useEffect( () => {
            getCard();
        },
        []);

        const getCard = async() => { //Esta es la función getCard donde obtenemos la información mediante la API de Yu Gi Oh.
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=50&offset=0&view=List`;
            const resp = await fetch(url);
            const {data} = await resp.json();

            const tarjets = data.map(card => ({ //Aqui se optiene los datos requeridos de las card de la API usando un objeto, usando .map() para iterar sobre el json de la API 
                key: card.id,
                img: card.card_images[0].image_url,
                title: card.name,
                desc: card.desc,
                type: card.type,
                price: card.card_prices[0].tcgplayer_price
            }));
        
           setCards(tarjets);
        }

    return (
        <div className="row m-5">
            {cards.map(card => { // Se manda cada dato requerido de la API mediante props al componente Cards donde tenemos maquetado la tarjeta y se muentre en la pagina. 
                return (
                    <Cards 
                        key={card.id} 
                        img={card.img} 
                        title={card.title} 
                        desc={card.desc} 
                        type={card.type} 
                        price={card.price}
                    />
                    
                )
            })}
            
        </div>
        
    );
}



  
