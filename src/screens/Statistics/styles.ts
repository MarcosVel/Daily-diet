import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type ContainerProps = {
  downFifty: boolean;
};

type CardProps = {
  color?: string;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  align-items: center;
  padding-top: 24px;
  background-color: ${({ theme, downFifty }) =>
    downFifty ? theme.COLORS.red_light : theme.COLORS.green_light};
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 24px;
`;

export const Stats = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;

export const Card = styled.View<CardProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.COLORS.gray_600};
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-shrink: 1;
`;

export const Diet = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
