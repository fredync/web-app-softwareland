import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4"></p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">FredEnergy<span className="text-primary font-weight-medium"></span></h1>
              <p className="text-muted mb-4 pb-2">Con FredEnergy tenemos la solución que necesitas para ahorrar, reducir tus gastos de operación y tener conocimiento en los costos de lo que consumes gracias al uso de la energía solar. Conoce más sobre nuestros paneles solares.</p>
              <a href="#" className="btn btn-warning">
                Vamos <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Inicio.jpg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;