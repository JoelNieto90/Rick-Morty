import React from 'react';
import { Row, Col, Card } from "antd";
import CharactersEpisodes from "./CharactersEpisodes";
import "../styles/CardEpisodes.scss";

function CardEpisodes({ data }) {
  return (
    <div className="CardEpisodes">
      <Row gutter={16}>
        {data.map((epi) => (
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="CardEpisodes_Col"
          >
            <Card cover={<img alt="Card" src={epi.img} />}>
              <section className="CardEpisodes_Col--Card">
                <div className="Card_Text">
                  <span>{epi.name}</span>
                  <span>{epi.air_date}</span>
                </div>
                <div>
                  {epi.charactersUrl.map((charsUrl) => (
                    <>
                      <CharactersEpisodes urlCharacter={charsUrl} />
                    </>
                  ))}
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