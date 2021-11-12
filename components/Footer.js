import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 0, title : "Redes Sociales",
      child : [
          { title : "Facebook", link : "/" },
          { title : "Twitter", link : "/" },
          { title : "Linkendin", link : "/" }
      ]
    },
    { id : 1, title : "Contacto",
      child : [
          { title : "Contacto", link : "/" },
          { title : "Preguntas frecuentes", link : "/" },
          { title : "Politica de privacidad", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2"></p>
                <h6 className="text-muted font-weight-normal"></h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Dirección</h6>
                <p className="text-muted f-14">Morelia,Mich. #86</p>
                <h6 className="text-muted pb-2">Correo: FredEnergy@gmail.com</h6>
                <h6 className="text-muted pb-2">Tel: (443) 3616311</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2020 © FredEnergy. Design by FredEnergy</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;