import React, { useEffect } from "react";
import Modal from "react-modal";
import { useTranslation } from 'react-i18next';
import Button from "../Button";

const ParagraphModal = ({ data, visible, onHide }) => {

  const { t } = useTranslation();

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal
      isOpen={visible}
      onRequestClose={onHide}
      style={{
        content: {
          width: "50%",
          margin: "0 auto",
          height: "max-content",
        },
      }}
    >
      <div className="flex flex-row-reverse">
        <Button
          text="X"
          type="button"
          onClick={onHide}
          containerClassName="px-6"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl text-center font-semibold">{t('chart.title')} </h2>
        <p className="py-4">{data}</p>
      </div>
    </Modal>
  );
};

export default ParagraphModal;
