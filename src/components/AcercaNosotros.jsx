import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

import ercika from "../img/Ericka.jpg";

const AcercaNosotros = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Acerca de nosotros los Doctores</h2>
      <Row gutter={16}>
        <Col span={9}>
          <Card
            hoverable
            style={{
              width: 270,
              backgroundColor: 'white',
              color: 'red'
            }}
            cover={<img alt="example" src={ercika} />}
          >
            <Meta
              
              title="Dra. Osa Culoncita"
              description="Soy una osa alegre y buena para diagnosticar tus locuras cabron"
            />
          </Card>
        </Col>
        <Col span={9}>
          <Card
            hoverable
            style={{
              width: 270,
            }}
            cover={<img alt="example" src={ercika} />}
          >
            <Meta
              title="Dra. Osa Culoncita"
              description="Soy una osa alegre y buena para diagnosticar tus locuras cabron"
            />
          </Card>
        </Col>
        <Col span={1}>
          <Card
            hoverable
            style={{
              width: 270,
            }}
            cover={<img alt="example" src={ercika} />}
          >
            <Meta
              title="Dra. Osa Culoncita"
              description="Soy una osa alegre y buena para diagnosticar tus locuras cabron"
            />
          </Card>
        </Col>
      </Row>

      <Link to="/">Atras</Link>
    </>
  );
};

export default AcercaNosotros;
