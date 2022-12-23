import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export default function Loading() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={COLORS.green_dark} size={"large"} />
    </Container>
  );
}
