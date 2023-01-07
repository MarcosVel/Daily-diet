import React from "react";
import { useTheme } from "styled-components/native";
import { Label } from "../Ui/styles";
import { Container, Icon, Option, Type } from "./styles";

type Props = {
  diet: boolean | null;
  setDiet: (type: boolean) => void;
};

export default function Options({ diet, setDiet }: Props) {
  const { FONT_SIZE, COLORS } = useTheme();
  const hasSelection = diet !== null;

  return (
    <Container>
      <Label bold size={FONT_SIZE.SM} mb={2}>
        Está dentro da dieta?
      </Label>

      <Option>
        <Type
          style={{ marginRight: 8 }}
          variant="green"
          selected={hasSelection && diet}
          onPress={() => setDiet(true)}
        >
          <Icon name="dot-fill" size={16} color={COLORS.green_dark} />
          <Label bold size={FONT_SIZE.SM} color={COLORS.gray_100}>
            Sim
          </Label>
        </Type>
        <Type
          selected={hasSelection && !diet}
          variant="red"
          onPress={() => setDiet(false)}
        >
          <Icon name="dot-fill" size={16} color={COLORS.red_dark} />
          <Label bold size={FONT_SIZE.SM} color={COLORS.gray_100}>
            Não
          </Label>
        </Type>
      </Option>
    </Container>
  );
}
