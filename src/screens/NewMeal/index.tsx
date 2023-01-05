import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Options from "../../components/Options";
import { RoundedContainer } from "../../components/Ui/styles";
import { addMeal } from "../../storage/addMeal";
import { EditMeal } from "../../storage/editMeal";
import { Container, CreateMeal, Date, Separator } from "./styles";

type RouteParams = {
  meal: string;
  description: string;
  hour: string;
  date: string;
  diet: string;
};

export default function NewMeal() {
  const route = useRoute();
  const item = route.params as RouteParams;
  const navigation = useNavigation();
  const [meal, setMeal] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [diet, setDiet] = useState("");

  useEffect(() => {
    if (item) {
      setMeal(item.meal);
      setDescription(item.description);
      setDate(item.date);
      setHour(item.hour);
      setDiet(item.diet);
    }
  }, []);

  async function handleSubmit() {
    const myMeal = {
      title: date,
      data: [
        {
          meal,
          description,
          hour,
          date,
          diet,
        },
      ],
    };

    if ([meal, description, date, hour, diet].includes("")) {
      return Alert.alert("Campos incompletos", "Complete todos os campos.");
    }

    try {
      if (item) {
        EditMeal(item, myMeal).then(() => {
          return navigation.navigate("home");
        });
      } else {
        await addMeal(myMeal).then(() => {
          return navigation.navigate("feedback", { diet });
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível adicionar a refeição.");
    }
  }

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Header title="Nova refeição" />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <RoundedContainer>
            <Input
              label="Nome"
              value={meal}
              onChangeText={(text: string) => setMeal(text)}
            />

            <Input
              label="Descrição"
              multiline
              value={description}
              onChangeText={(text: string) => setDescription(text)}
            />

            <Date>
              <Input
                label="Data"
                mask="99/99/9999"
                value={date}
                onChangeText={(text: string) => setDate(text)}
              />

              <Separator />

              <Input
                label="Hora"
                mask="99:99"
                value={hour}
                onChangeText={(text: string) => setHour(text)}
              />
            </Date>

            <Options diet={diet} setDiet={setDiet} />

            <CreateMeal
              title={item ? "Salvar alterações" : "Cadastrar refeição"}
              onPress={handleSubmit}
            />
          </RoundedContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}
