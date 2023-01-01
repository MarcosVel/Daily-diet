import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import Loading from "../../components/Loading";
import { Label, RoundedContainer } from "../../components/Ui/styles";
import { statisticsMeals } from "../../storage/statisticsMeals";
import { Card, Container, Diet, GoBack, Stats } from "./styles";

type Props = {
  registeredMeals: number;
  mealsInsideDiet: number;
  mealsOutsideDiet: number;
};

export default function Statistics() {
  const { FONT_SIZE, COLORS } = useTheme();
  const navigation = useNavigation();
  const [data, setData] = useState<Props>();
  const [loading, setLoading] = useState(false);

  async function getStatistics() {
    try {
      setLoading(true);
      const stats = await statisticsMeals();

      setData(stats);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível buscar as estatísticas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStatistics();
  }, []);

  console.log(data);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GoBack onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color={COLORS.green_dark} />
          </GoBack>

          <Stats>
            <Label
              size={FONT_SIZE.XG}
              color={COLORS.gray_100}
              mt={8}
              mb={2}
              bold
            >
              90,86%
            </Label>
            <Label size={FONT_SIZE.SM}>das refeições dentro da dieta</Label>
          </Stats>

          <RoundedContainer>
            <Label size={FONT_SIZE.SM} color={COLORS.gray_100} mb={24} bold>
              Estatísticas gerais
            </Label>

            <Card>
              <Label size={FONT_SIZE.XL} color={COLORS.gray_100} mb={8} bold>
                22
              </Label>
              <Label size={FONT_SIZE.SM}>
                melhor sequência de pratos dentro da dieta
              </Label>
            </Card>

            <Card>
              <Label size={FONT_SIZE.XL} color={COLORS.gray_100} mb={8} bold>
                {data?.registeredMeals}
              </Label>
              <Label size={FONT_SIZE.SM}>refeições registradas</Label>
            </Card>

            <Diet>
              <Card color={COLORS.green_light} style={{ marginRight: 12 }}>
                <Label size={FONT_SIZE.XL} color={COLORS.gray_100} mb={8} bold>
                  {data?.mealsInsideDiet}
                </Label>
                <Label size={FONT_SIZE.SM} style={{ textAlign: "center" }}>
                  refeições dentro da dieta
                </Label>
              </Card>

              <Card color={COLORS.red_light}>
                <Label size={FONT_SIZE.XL} color={COLORS.gray_100} mb={8} bold>
                  {data?.mealsOutsideDiet}
                </Label>
                <Label size={FONT_SIZE.SM} style={{ textAlign: "center" }}>
                  refeições fora da dieta
                </Label>
              </Card>
            </Diet>
          </RoundedContainer>
        </>
      )}
    </Container>
  );
}
