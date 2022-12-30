import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import goodFeedbackImg from "../../assets/goodFeedback.png";
import badFeedbackImg from "../../assets/badFeedback.png";
import Button from "../../components/Button";
import { Label } from "../../components/Ui/styles";
import { Container, Img } from "./styles";

type RouteParams = {
  diet: string;
};

export default function Feedback() {
  const route = useRoute();
  const { diet } = route.params as RouteParams;
  const { COLORS, FONT_SIZE } = useTheme();
  const navigation = useNavigation();

  const goodFeedback = () => (
    <>
      <Label bold size={FONT_SIZE.XL} color={COLORS.green_dark} mb={8}>
        Continue assim!
      </Label>
      <Label color={COLORS.gray_100}>
        Você continua <Label bold>dentro da dieta.</Label> Muito bem!
      </Label>
      <Img source={goodFeedbackImg} />
      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </>
  );

  const badFeedback = () => (
    <>
      <Label bold size={FONT_SIZE.XL} color={COLORS.red_dark} mb={8}>
        Que pena!
      </Label>
      <Label color={COLORS.gray_100} style={{ textAlign: "center" }}>
        Você <Label bold>saiu da dieta</Label> dessa vez, mas continue{"\n"}se
        esforçando e não desista!
      </Label>
      <Img source={badFeedbackImg} />
      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </>
  );

  return (
    <Container>{diet === "yes" ? goodFeedback() : badFeedback()}</Container>
  );
}
