import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ModalComponent from "../../components/Modal";
import { Label, RoundedContainer } from "../../components/Ui/styles";
import { DeleteMeal } from "../../storage/deleteMeal";
import { Bottom, Buttons, Container, Dot, Pin } from "./styles";

type RouteParams = {
  item: {
    meal: string;
    description: string;
    hour: string;
    date: string;
    diet: string;
  };
};

export default function Meal() {
  const { COLORS, FONT_SIZE } = useTheme();
  const route = useRoute();
  const { item } = route.params as RouteParams;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  async function handleDeleteMeal() {
    try {
      await DeleteMeal(item).then(() => {
        navigation.navigate("home");
      });
    } catch (error) {
      console.log("Error in handleDeleteMeal", error);
      Alert.alert("Ops", "Não foi possível remover a refeição.");
    }
  }

  return (
    <>
      <Container inDiet={item.diet}>
        <Header title="Refeição" />

        <RoundedContainer style={{ alignItems: "flex-start" }}>
          <Label bold color={COLORS.gray_100} size={FONT_SIZE.LG} mb={8}>
            {item.meal}
          </Label>
          <Label mb={24}>{item.description}</Label>

          <Label bold color={COLORS.gray_100} size={FONT_SIZE.SM} mb={8}>
            Data e hora
          </Label>
          <Label mb={24}>
            {item.date} às {item.hour}
          </Label>

          <Pin>
            <Dot diet={item.diet} />
            <Label color={COLORS.gray_100} size={FONT_SIZE.SM}>
              {item.diet === "yes" ? "dentro da dieta" : "fora da dieta"}
            </Label>
          </Pin>

          <Bottom>
            <Button
              title="Editar refeição"
              icon="edit-3"
              style={{ marginBottom: 8 }}
            />
            <Button
              title="Excluir refeição"
              icon="trash-2"
              type="SECONDARY"
              onPress={() => setModalVisible(true)}
            />
          </Bottom>
        </RoundedContainer>
      </Container>

      {modalVisible && (
        <ModalComponent modalVisible={modalVisible}>
          <Label
            bold
            color={COLORS.gray_100}
            size={FONT_SIZE.LG}
            mb={32}
            style={{ textAlign: "center" }}
          >
            Deseja realmente excluir o{"\n"}registro da refeição?
          </Label>
          <Buttons>
            <Button
              full
              title="Cancelar"
              type="SECONDARY"
              onPress={() => setModalVisible(false)}
              style={{ marginRight: 12 }}
            />
            <Button full title="Sim, excluir" onPress={handleDeleteMeal} />
          </Buttons>
        </ModalComponent>
      )}
    </>
  );
}
