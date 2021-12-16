import { React, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { getDataCharactersByID } from "../services/getDataCharacters";

const CharactersEpisodes = ({ urlCharacter }) => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    getDataCharactersByID(urlCharacter).then((data) => {
      setUrl(data);
    });
  }, [urlCharacter]);

  return (
    <Row gutter={24}>
      <Col span={24}>
        <p style={{ textAlign: "center" }}>{url.name}</p>
      </Col>
    </Row>
  );
};

export default CharactersEpisodes;
