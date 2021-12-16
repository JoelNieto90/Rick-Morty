import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataCharacters";
import { Table, Row, Col } from "antd";
import ModalCharacter from "../components/ModalCharacter";
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
      dataIndex: "",
      key: "",
      render: (chars) => (
        <>
          <ModalCharacter data={chars} />
        </>
      ),
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
      <Row>
        <Col span={24} className="Chars">
          <img className="Chars_Img" src={letters} alt="letters" />
          <div className="Chars_Table">
            <Table
              rowKey={(chars) => chars.id}
              columns={columns}
              dataSource={chars}
              pagination={true}
              loading={loading}
              scroll={{ x: "90%" }}
              className="Chars_Table--Data"
            ></Table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Characters;