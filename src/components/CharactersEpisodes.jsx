import { React, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { getDataCharactersByID } from "../services/getDataCharacters";
import ModalCharacter from "../components/ModalCharacter";

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
        <p style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {url.name}
        </p>
        <ModalCharacter data={url} />
      </Col>
    </Row>
  );
};

export default CharactersEpisodes;
