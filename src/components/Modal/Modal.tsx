import React, { useState } from 'react';
import { Button, Modal as AntModal } from 'antd';

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AntModal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </AntModal>
    </>
  );
};