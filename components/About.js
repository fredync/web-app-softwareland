import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Somos</span></h3>
              <p className="text-muted">S​​omos una empresa con más de 1000 sistemas fotovoltaicos instalados a nivel nacional.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Nos enfocamos en ayudar a nuestros clientes a ahorrar en su recibo de luz hasta 99%.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Misión</h6>
                <p className="text-muted font-weight-light">Facilitar el acceso a la sustentabilidad a los hogares, negocios y empresas a través de tecnologías que contribuyan a satisfacer las necesidades presentes sin comprometer la capacidad de las generaciones futuras.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Visión</h6>
                <p className="text-muted font-weight-light">Posicionarnos como una empresa económicamente sustentable, líder en el sector de energías renovables, siendo un referente en el mercado.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;