import { React, useState } from "react";
import { Modal, List } from "antd";
import "../styles/ModalChars.scss";

const ModalCharacter = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <img
        src={data.img}
        alt="Pictures"
        style={{
          width: "50px",
          borderRadius: "10px",
          filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))",
        }}
        onClick={showModal}
      />
      <Modal
        title={data.name}
        visible={isModalVisible}
        centered
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <section className="ModalChars">
          <div className="ModalChars_Picture">
            <img
              src={data.img}
              alt="Pictures"
              style={{
                width: "100%",
                borderRadius: "10px",
                filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25))",
                boxShadow: "0px 0px 8px #000000",
              }}
              onClick={showModal}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              {data.status === "Alive" ? (
                <p
                  className="ModalChars_Picture--Status"
                  style={{ background: "#198754" }}
                >
                  {data.status}
                </p>
              ) : (
                <p
                  className="ModalChars_Picture--Status"
                  style={{ background: "#B12323" }}
                >
                  {data.status}
                </p>
              )}
              {data.gender === "Male" ? (
                <p
                  className="ModalChars_Picture--Status"
                  style={{ background: "#03A9F4" }}
                >
                  {data.gender}
                </p>
              ) : (
                <p
                  className="ModalChars_Picture--Status"
                  style={{ background: "#ED23B4" }}
                >
                  {data.gender}
                </p>
              )}
            </div>
          </div>
          <div className="ModalChars_Info">
            <p>Species: {data.species}</p>
            <p>Type: {data.type === "" ? "unknown" : data.type}</p>
            <p>Origin: {data.origin}</p>
            <p>Location: {data.location}</p>
            <p>Episodes: {data.episodes}</p>
            <List
              size="small"
              dataSource={data.episodeUrl}
              className="ModalChars_Info--List"
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default ModalCharacter;