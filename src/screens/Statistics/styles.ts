import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type CardProps = {
  color?: string;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.green_light};
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 24px;
`;

export const Stats = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.white};
  margin-top: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Card = styled.View<CardProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.COLORS.gray_600};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-shrink: 1;
`;

export const Diet = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
