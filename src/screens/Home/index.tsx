import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import logoImg from "../../assets/logo.png";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Meal from "../../components/Meal";
import { Label } from "../../components/Ui/styles";
import { getAllMeals } from "../../storage/getAllMeals";
import porcentageInDiet, { InDietProps } from "../../utils/porcentageInDiet";
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inDiet, setInDiet] = useState<InDietProps>();

  async function fetchMeals() {
    try {
      setLoading(true);

      const meals = await getAllMeals();
      const data = await porcentageInDiet();

      setData(meals);
      setInDiet(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível buscar suas refeições.");
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const renderHeader = () => (
    <>
      <Logo source={logoImg} />

      <Statistic
        downFifty={inDiet?.downFifty}
        onPress={() => navigation.navigate("statistics")}
      >
        <Open>
          <Ionicons
            name="open-outline"
            size={24}
            color={inDiet?.downFifty ? COLORS.red_dark : COLORS.green_dark}
          />
        </Open>
        <Label size={FONT_SIZE.XG} color={COLORS.gray_100} mb={2} bold>
          {inDiet?.porcentage}%
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

  const renderEmptyList = () => (
    <>
      <Label bold color={COLORS.gray_100}>
        Acabou de comer algo?
      </Label>
      <Label color={COLORS.gray_100}>Nos conte qual foi sua refeição.</Label>
    </>
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <MealsList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Meal hour={item.hour} meal={item.meal} diet={item.diet} />
          )}
          renderSectionHeader={({ section }) => (
            <SectionTitle>{section.title}</SectionTitle>
          )}
          renderSectionFooter={() => <SectionFooterSeparator />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
          ListHeaderComponentStyle={{ paddingTop: 24 }}
          ListEmptyComponent={() => renderEmptyList()}
        />
      )}
    </Container>
  );
}
