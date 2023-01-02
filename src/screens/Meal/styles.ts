import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type ContainerProps = {
  inDiet: string;
};

type DotProps = {
  diet: string;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, inDiet }) =>
    inDiet === "yes" ? theme.COLORS.green_light : theme.COLORS.red_light};
`;

export const Pin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.gray_600};
`;

export const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, diet }) =>
    diet === "yes" ? theme.COLORS.green_dark : theme.COLORS.red_dark};
  border-radius: 8px;
  margin-right: 8px;
`;

export const Bottom = styled.View`
  width: 100%;
  margin-top: auto;
`;
