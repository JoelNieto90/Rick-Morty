import React from 'react';
import { Row, Col, Card } from "antd";
import "../styles/CardEpisodes.scss";

function CardEpisodes({ data }) {
  return (
    <div className="CardEpisodes">
    {console.log(data)}
      <Row gutter={16}>
        {data.map((epi) => (
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="CardEpisodes_Col"
          >
            <Card
              cover={
                <img
                  alt="Card"
                  src={epi.img}
                />
              }
            >
              <section className="CardEpisodes_Col--Card">
                <div className="Card_Text">
                  <span>{epi.name}</span>
                  <span>{epi.air_date}</span>
                </div>
              </section>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardEpisodes;