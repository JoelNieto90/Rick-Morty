import { React, useState } from "react";
import { Modal } from "antd";

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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default ModalCharacter;