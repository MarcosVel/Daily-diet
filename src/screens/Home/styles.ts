import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 24px;
`;

export const Logo = styled.Image`
  margin: 0 auto;
`;

export const Statistic = styled.View`
  margin: 32px 0 40px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.green_light};
`;

export const Open = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Quantity = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_100};
  `}
  margin-bottom: 2px;
`;

export const AddMeal = styled.View``;
