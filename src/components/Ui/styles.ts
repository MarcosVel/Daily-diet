import { Text, TextProps } from "react-native";
import styled, { css } from "styled-components/native";

type Props = TextProps & {
  size?: number;
  color?: string;
  bold?: boolean;
  mt?: number;
  mb?: number;
};

export const Label = styled(Text)<Props>`
  ${({ theme, size, color, bold }) => css`
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    font-size: ${size || theme.FONT_SIZE.MD}px;
    color: ${color || theme.COLORS.gray_200};
  `}

  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
`;

export const RoundedContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  margin-top: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
