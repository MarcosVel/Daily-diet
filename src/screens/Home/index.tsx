import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import logoImg from "../../assets/logo.png";
import Button from "../../components/Button";
import Meal from "../../components/Meal";
import { Label } from "../../components/Ui/styles";
import {
  AddMeal,
  Container,
  Logo,
  MealsList,
  Open,
  SectionFooterSeparator,
  SectionTitle,
  Statistic,
} from "./styles";

export default function Home() {
  const { COLORS, FONT_SIZE } = useTheme();
  const navigation = useNavigation();

  const DATA = [
    {
      title: "12.08.22",
      data: [
        { hour: "20:00", meal: "X-tudo" },
        { hour: "16:00", meal: "Whey protein com leite" },
        {
          hour: "13:30",
          meal: "Salada cesar com frango grelhadinho com molho especial",
        },
        { hour: "12:30", meal: "Salada cesar com frango grelhado" },
        { hour: "09:55", meal: "Vitamina de banana com abacate" },
      ],
    },
    {
      title: "11.08.22",
      data: [
        { hour: "20:00", meal: "X-tudo" },
        { hour: "16:00", meal: "Whey protein com leite" },
        { hour: "12:30", meal: "Salada cesar com frango grelhado" },
        { hour: "09:55", meal: "Vitamina de banana com abacate" },
      ],
    },
  ];

  const renderHeader = () => (
    <>
      <Logo source={logoImg} />

      <Statistic onPress={() => navigation.navigate("statistics")}>
        <Open>
          <Ionicons name="open-outline" size={24} color={COLORS.green_dark} />
        </Open>
        <Label size={FONT_SIZE.XG} color={COLORS.gray_100} mb={2} bold>
          90,86%
        </Label>
        <Label size={FONT_SIZE.SM}>das refeições dentro da dieta</Label>
      </Statistic>

      <AddMeal>
        <Label mb={8} color={COLORS.gray_100}>
          Refeições
        </Label>
        <Button
          title="Nova refeição"
          icon="plus"
          onPress={() => navigation.navigate("newMeal")}
        />
      </AddMeal>
    </>
  );

  return (
    <Container>
      <MealsList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Meal hour={item.hour} meal={item.meal} />}
        renderSectionHeader={({ section }) => (
          <SectionTitle>{section.title}</SectionTitle>
        )}
        renderSectionFooter={() => <SectionFooterSeparator />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={{ paddingTop: 24 }}
      />
    </Container>
  );
}
