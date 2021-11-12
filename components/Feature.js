import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "./images/Interconectado.jpg", title : "Sistemas fotovoltaicos interconectados a la red", desc : "Requieren necesariamente interconexión con la red eléctrica nacional para operar.", link : "/"},
    {id : 2, img : "./images/Aislado.jpg", title : "Sistemas fotovoltaicos aislados", desc : "Suministra electricidad a propiedades que carecen de red eléctrica al alcance.", link : "/"},
    {id : 3, img : "./images/Bombeo.jpg", title : "Sistemas fotovoltaicos de bombeo", desc : "Convierten la energía solar en energía eléctrica para alimentar una bomba de agua.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Funcionamiento</span></h3>
              <p className="text-muted">Los paneles solares fotovoltaicos son un conjunto de celdas solares que transforman la energía del sol en electricidad útil, éstos pueden ser interconectados a la red, aislados y de bombeo..</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;