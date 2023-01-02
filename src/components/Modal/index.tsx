import React from "react";
import { Modal } from "react-native";
import { Container, ModalContainer } from "./styles";

type ModalProps = {
  modalVisible: boolean;
  children: React.ReactNode;
};

export default function ModalComponent({ modalVisible, children }: ModalProps) {
  return (
    <Container>
      <Modal transparent visible={modalVisible}>
        <ModalContainer>{children}</ModalContainer>
      </Modal>
    </Container>
  );
}
