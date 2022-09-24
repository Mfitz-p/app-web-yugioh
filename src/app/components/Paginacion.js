import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
// Se maqueto este componente obtenido de react-bootstrap para la paginación de las tarjetas que se obtenieron 

export const Paginacion = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Pagination className='justify-content-center'>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Item active>{30}</Pagination.Item>
              <Pagination.Item>{40}</Pagination.Item>
              <Pagination.Item disabled>{50}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
