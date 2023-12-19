import React, { useEffect } from "react";
import Modal from "react-modal";
import Button from "../Button";
import ResultCarousel from "../ResultCarousel";

const InfoModal = ({ language = "es", visible, onHide }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal isOpen={visible} onRequestClose={onHide}>
      <div className="flex flex-row-reverse">
        <Button
          text="X"
          type="button"
          onClick={onHide}
          containerClassName="px-6"
        />
      </div>
      <ResultCarousel language={language} />
    </Modal>
  );
};

export default InfoModal;
