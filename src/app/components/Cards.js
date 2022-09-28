import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//Componente card 

function Cards(props) { // Se recibe las props mandadas del componente CardList
  return (
    // Usando react-bootstrap se maqueto la card para renderizar la imagen, el nombre, tipo, descripcion y el precio. 
          <Card className='m-2' border='danger' style={{ width: '18rem' }}>
            <Card.Img 
           className='mt-2' variant="top" src={props.img} /> {/*Se recibe prop llamada img para renderizar la imagen de la tarjeta*/}
            <Card.Body>
              <Card.Title>{props.title}</Card.Title> {/*Se recibe prop llamada title para renderizar el nombre de la tarjeta*/}
              <Card.Text> {/*Se recibe prop llamada desc para renderizar la descripcion de la tarjeta*/}
              {props.desc}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{props.type}</ListGroup.Item> {/*Se recibe prop llamada type para renderizar el tipo de la tarjeta*/}
              <ListGroup.Item>$ {props.price}</ListGroup.Item> {/*Se recibe prop llamada price para renderizar el precio de la tarjeta*/}
            </ListGroup>
          </Card>

  );
}

export default Cards;