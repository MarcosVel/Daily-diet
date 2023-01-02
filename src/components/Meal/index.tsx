import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Dot, Hour, MealTitle, Separator } from "./styles";

type Props = {
  hour: string;
  meal: string;
  diet: string;
  onPress: () => void;
};

export default function Meal({ hour, meal, diet, onPress }: Props) {
  const { FONT_SIZE } = useTheme();

  return (
    <Container onPress={onPress}>
      <Hour>{hour}</Hour>
      <Separator />
      <MealTitle size={FONT_SIZE.MD} numberOfLines={1}>
        {meal}
      </MealTitle>
      <Dot diet={diet} />
    </Container>
  );
}
