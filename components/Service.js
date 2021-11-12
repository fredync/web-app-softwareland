import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Mantenimiento preventivo", desc : "Revisión de todos los puntos de la instalación y limpieza de los paneles solares." },
    { title : "", desc : "" },
    { title : "Mantenimiento correctivo", desc : "Reparar o cambiar algun componente de la instalación." },
    
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Servicios</span></h3>
              <p className="text-muted">El mantenimiento preventivo y correctivo de módulos fotovoltaicos es una actividad esencial para lograr los máximos rendimientos y alargar la vida útil de la instalación.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;