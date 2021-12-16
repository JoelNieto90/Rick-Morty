import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataCharacters";
import { Table, Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/Characters.scss";
import letters from "../assets/Characters.png";

const Characters = () => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataFromAPI().then((data) => {
      setChars(data);
    });
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "img",
      key: "img",
      render: (chars) => (
        <img
          src={chars}
          alt="Pictures"
          style={{
            width: "50px",
            borderRadius: "10px",
            filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))",
          }}
        />
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
  ];

  return (
    <>
      <Row >
        <Col span={24} className="Chars">
          <img className="Chars_Img" src={letters} alt="letters" />
          <div className="Chars_Table">
            <Table
              rowKey={(chars) => chars.id}
              columns={columns}
              dataSource={chars}
              pagination={true}
              loading={loading}
              scroll={{x: "90%"}}
              className="Chars_Table--Data"
            ></Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Characters;