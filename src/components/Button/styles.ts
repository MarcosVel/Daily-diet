import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, type }) => css`
    border: 1px solid ${theme.COLORS.gray_200};
    background-color: ${({ theme }) =>
      type === "PRIMARY" ? theme.COLORS.gray_200 : theme.COLORS.white};
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === "PRIMARY" ? theme.COLORS.white : theme.COLORS.gray_200,
}))`
  margin-right: 10px;
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.white : theme.COLORS.gray_200};
  `}

  line-height: 18px;
`;
