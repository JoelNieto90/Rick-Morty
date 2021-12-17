import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataEpisodes";
import CardEpisodes from "../components/CardEpisodes";
import { Row, Col, Input } from "antd";
import letters from "../assets/episodes.png";
import "../styles/Episodes.scss";
const { Search } = Input;

const Episodes = () => {
  const [epis, setEpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    setLoading(true)
    getDataFromAPI().then((data) => {
      setEpis(data);
      setSearch(data)
    });
    setLoading(false)
  }, []);
  return (
    <>
      <Row>
        <Col span={24} className="Episodes">
          <img className="Episodes_Img" src={letters} alt="letters" />
          <Search
            placeholder="Search for Episodes"
            loading={loading}
            onSearch={onSearch}
            style={{ width: "40%" }}
            enterButton
          />
          {search === "" ? <p>Nada</p> : <CardEpisodes data={epis} />}
          {/* <CardEpisodes data={epis} /> */}
        </Col>
      </Row>
    </>
  );
}

export default Episodes;