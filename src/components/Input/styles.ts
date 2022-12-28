import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  flex-shrink: 1;
`;

export const InputText = styled.TextInput`
  padding: 14px;
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 24px;
  height: ${({ multiline }) => (multiline ? 120 : 48)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border: 1px solid ${theme.COLORS.gray_500};
  `};
`;

export const MaskedInput = {
  padding: 14,
  borderRadius: 6,
  marginTop: 4,
  marginBottom: 24,
  height: 48,
  borderWidth: 1,
  borderColor: theme.COLORS.gray_500,
  color: theme.COLORS.gray_100,
  fontSize: theme.FONT_SIZE.MD,
  fontFamily: theme.FONT_FAMILY.REGULAR,
};
