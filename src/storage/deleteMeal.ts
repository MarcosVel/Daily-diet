import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

type Props = {
  meal: string;
  description: string;
  hour: string;
  date: string;
  diet: string;
};

export async function DeleteMeal(meal: Props) {
  try {
    let allMeals = await getAllMeals();

    const filteredAllMeals = allMeals
      .map((item: MealStorageDTO) => item.data.map(itemData => itemData))
      .map(subarr =>
        subarr.filter(
          item =>
            item.meal !== meal.meal ||
            item.description !== meal.description ||
            item.hour !== meal.hour
        )
      );

    let index = 0;
    for (let item of filteredAllMeals) {
      allMeals[index].data = item;
      index++;
    }

    const newStorage = JSON.stringify(allMeals);
    await AsyncStorage.setItem(MEALS_COLLECTION, newStorage);
  } catch (error) {
    console.log(error);
  }
}
