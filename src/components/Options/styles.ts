import styled, { css } from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type TypeProps = {
  selected: string;
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

  ${({ theme, selected }) =>
    css`
      border: 1px solid
        ${selected === "yes"
          ? theme.COLORS.green_dark
          : selected === "no"
          ? theme.COLORS.red_dark
          : theme.COLORS.gray_600};
      background-color: ${selected === "yes"
        ? theme.COLORS.green_light
        : selected === "no"
        ? theme.COLORS.red_light
        : theme.COLORS.gray_600};
    `}
`;

export const Icon = styled(Octicons)`
  margin-right: 8px;
`;
