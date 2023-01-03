import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  border-radius: 8px;
  padding: 24px;
  margin: auto 24px;
  align-items: center;
`;
