import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import { Label } from "../Ui/styles";
import { Container, GoBack, Icon } from "./styles";

type Props = {
  title?: string;
};

export default function Header({ title }: Props) {
  const { FONT_SIZE, COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <GoBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} />
      </GoBack>
      <Label bold size={FONT_SIZE.LG} color={COLORS.gray_100}>
        {title}
      </Label>
    </Container>
  );
}
