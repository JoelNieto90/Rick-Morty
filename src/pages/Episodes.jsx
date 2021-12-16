import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataEpisodes";
import { Row, Col } from "antd";
import letters from "../assets/episodes.png";
import "../styles/Episodes.scss";

const Episodes = () => {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setEpis(data);
    });
  }, []);
  return (
    <>
      <Row>
        <Col span={24} className="Episodes">
          <img className="Episodes_Img" src={letters} alt="letters" />
          <p>Barra de busqueda</p>
          <p>Cards</p>
        </Col>
      </Row>
    </>
  );
}

export default Episodes;