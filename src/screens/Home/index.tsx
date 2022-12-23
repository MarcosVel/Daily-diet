import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";
import logoImg from "../../assets/logo.png";
import { Label } from "../../components/Ui/styles";
import { Container, Logo, Open, Quantity, Statistic } from "./styles";

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
    </Container>
  );
}
