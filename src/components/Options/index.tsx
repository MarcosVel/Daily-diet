import React from "react";
import { useTheme } from "styled-components/native";
import { Label } from "../Ui/styles";
import { Container, Icon, Option, Type } from "./styles";

type Props = {
  diet: string;
  setDiet: (type: string) => void;
};

export default function Options({ diet, setDiet }: Props) {
  const { FONT_SIZE, COLORS } = useTheme();

  return (
    <Container>
      <Label bold size={FONT_SIZE.SM} mb={2}>
        Está dentro da dieta?
      </Label>

      <Option>
        <Type
          style={{ marginRight: 8 }}
          selected={diet === "yes" ? "yes" : ""}
          onPress={() => setDiet("yes")}
        >
          <Icon name="dot-fill" size={16} color={COLORS.green_dark} />
          <Label bold size={FONT_SIZE.SM} color={COLORS.gray_100}>
            Sim
          </Label>
        </Type>
        <Type
          selected={diet === "no" ? "no" : ""}
          onPress={() => setDiet("no")}
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
