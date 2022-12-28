import React from "react";
import { MaskedTextInput } from "react-native-mask-text";
import { useTheme } from "styled-components/native";
import { Label } from "../Ui/styles";
import { Container, InputText, MaskedInput } from "./styles";

type Props = {
  label: string;
  multiline?: boolean;
  mask?: string;
};

export default function Input({ label, multiline, mask, ...rest }: Props) {
  const { FONT_SIZE } = useTheme();

  return (
    <Container {...rest}>
      <Label bold size={FONT_SIZE.SM}>
        {label}
      </Label>

      {mask ? (
        <MaskedTextInput
          mask={mask}
          onChangeText={() => {}}
          keyboardType="numeric"
          style={MaskedInput}
        />
      ) : (
        <InputText
          multiline={multiline}
          numberOfLines={multiline ? 4 : 1}
          style={{ textAlignVertical: multiline ? "top" : "center" }}
        />
      )}
    </Container>
  );
}
