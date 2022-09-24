import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//Componente card 

function Cards(props) { // Se recibe las props mandadas del componente CardList
  return (
    // Usando react-bootstrap se maqueto la card para renderizar la imagen, el nombre, tipo, descripcion y el precio. 
          <Card className='m-2' border='danger' style={{ width: '18rem' }}>
            <Card.Img 
           className='mt-2' variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              {props.desc}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{props.type}</ListGroup.Item>
              <ListGroup.Item>$ {props.price}</ListGroup.Item>
            </ListGroup>
          </Card>

  );
}

export default Cards;