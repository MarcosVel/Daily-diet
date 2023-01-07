import styled, { css } from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type TypeProps = {
  selected: boolean;
  variant: "green" | "red";
};

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const Type = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.5,
}))<TypeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-shrink: 1;
  padding: 16px;
  border-radius: 6px;

  ${({ theme, selected, variant }) =>
    css`
      border: 1px solid
        ${!selected
          ? theme.COLORS.gray_600
          : variant === "green"
          ? theme.COLORS.green_dark
          : theme.COLORS.red_dark};
      background-color: ${!selected
        ? theme.COLORS.gray_600
        : variant === "green"
        ? theme.COLORS.green_light
        : theme.COLORS.red_light};
    `}
`;

export const Icon = styled(Octicons)`
  margin-right: 8px;
`;
