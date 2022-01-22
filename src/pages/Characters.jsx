import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { Table, Row, Col } from "antd";
import ModalCharacter from "../components/ModalCharacter";
import "antd/dist/antd.css";
import "../styles/Characters.scss";
import letters from "../assets/Characters.png";

const Characters = ({value}) => {
  const { data, loading } = useFetchCharacters(value);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "",
      key: "",
      render: (data) => (
        <>
          <ModalCharacter data={data} />
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
              rowKey={(data) => data.id}
              columns={columns}
              dataSource={data}
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

Characters.defaultProps = {
	value: "https://rickandmortyapi.com/api/character",
};

export default Characters;