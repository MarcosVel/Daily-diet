import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "../../theme";
import { Label } from "../Ui/styles";

type DotProps = {
  diet: string;
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.5,
}))`
  flex-direction: row;
  align-items: center;
  padding: 14px 12px 14px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.COLORS.gray_500};
  margin-top: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.gray_100};
  `}
`;

export const Separator = styled.View`
  height: 16px;
  margin: 0 12px;
  border: 1px solid ${theme.COLORS.gray_500};
`;

export const MealTitle = styled(Label)`
  flex: 1;
  margin-right: 8px;
`;

export const Dot = styled.View<DotProps>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, diet }) =>
    diet === "yes" ? theme.COLORS.green_mid : theme.COLORS.red_mid};
  border-radius: 8px;
  margin-left: auto;
`;
