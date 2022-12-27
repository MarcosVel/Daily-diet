import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 16px;
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 24px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.gray_200,
}))``;
