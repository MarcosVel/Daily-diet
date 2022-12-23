import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";
import logoImg from "../../assets/logo.png";
import Button from "../../components/Button";
import { Label } from "../../components/Ui/styles";
import { AddMeal, Container, Logo, Open, Quantity, Statistic } from "./styles";

export default function Home() {
  const { COLORS, FONT_SIZE } = useTheme();

  return (
    <Container>
      <Logo source={logoImg} />

      <Statistic>
        <Open>
          <Ionicons name="open-outline" size={24} color={COLORS.green_dark} />
        </Open>
        <Quantity>90,86%</Quantity>
        <Label size={FONT_SIZE.SM}>das refeições dentro da dieta</Label>
      </Statistic>

      <AddMeal>
        <Label mb={8} color={COLORS.gray_100}>
          Refeições
        </Label>
        <Button title="Nova refeição" icon="plus" />
      </AddMeal>
    </Container>
  );
}
