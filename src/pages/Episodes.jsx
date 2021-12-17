import { React, useEffect, useState } from "react";
import { getDataEpisodes } from "../services/getDataEpisodes";
import { getDataEpisodesByName } from "../services/getDataEpisodes";
import CardEpisodes from "../components/CardEpisodes";
import { Row, Col, Input } from "antd";
import letters from "../assets/episodes.png";
import "../styles/Episodes.scss";
const { Search } = Input;

const Episodes = () => {
  const [epis, setEpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true)
    getDataEpisodes().then((data) => {
      setEpis(data);
    });
    setLoading(false)
  }, []);

  const onSearch = (value) => {
    setSearch(value);
    if (value === "" ||  value === null) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
      getDataEpisodesByName(value).then((data) => {
        setEpis(data);
      });
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <>
          <p>Hiciste busqueda y me mostrare: {search}</p>
          {console.log(epis)}
        </>
      )
    } else {
      // return <CardEpisodes data={epis} />;
      return <h1 style={{color: "white"}}>Todas las cards</h1>
    }
  }


  return (
    <>
      <Row>
        <Col span={24} className="Episodes">
          <img className="Episodes_Img" src={letters} alt="letters" />
          <Search
            placeholder="Search for Episodes"
            loading={loading}
            onSearch={onSearch}
            style={{ width: "55%", marginBottom: "50px" }}
            enterButton
          />
          {searchList()}
        </Col>
      </Row>
    </>
  );
}

export default Episodes;