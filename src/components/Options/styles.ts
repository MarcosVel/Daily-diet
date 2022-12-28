import styled, { css } from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type TypeProps = {
  yesSelected?: boolean;
  noSelected?: boolean;
};

export const Container = styled.View`
  width: 100%;
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

  ${({ theme, yesSelected, noSelected }) =>
    css`
      border: 1px solid
        ${yesSelected
          ? theme.COLORS.green_dark
          : noSelected
          ? theme.COLORS.red_dark
          : theme.COLORS.gray_600};
      background-color: ${yesSelected
        ? theme.COLORS.green_light
        : noSelected
        ? theme.COLORS.red_light
        : theme.COLORS.gray_600};
    `}
`;

export const Icon = styled(Octicons)`
  margin-right: 8px;
`;
