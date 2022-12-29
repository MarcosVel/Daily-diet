import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Options from "../../components/Options";
import { RoundedContainer } from "../../components/Ui/styles";
import { Container, CreateMeal, Date } from "./styles";

export default function NewMeal() {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header title="Nova refeição" />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <RoundedContainer>
            <Input label="Nome" />

            <Input label="Descrição" multiline />

            <Date>
              <Input
                label="Data"
                mask="99/99/9999"
                style={{ marginRight: 20 }}
              />
              <Input label="Hora" mask="99:99" />
            </Date>

            <Options />

            <CreateMeal
              title="Cadastrar refeição"
              onPress={() => navigation.navigate("feedback")}
            />
          </RoundedContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}
