import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals = storage ? JSON.parse(storage) : [];

    const orderedMeals = meals.sort((a: MealStorageDTO, b: MealStorageDTO) =>
      moment(a.title, "DD/MM/YYYY").isAfter(moment(b.title, "DD/MM/YYYY"))
        ? -1
        : 1
    );

    // order meals of a day
    for (let item of orderedMeals) {
      let itemData = item.data;

      itemData.sort(
        (a: any, b: any) => parseFloat(a.hour) - parseFloat(b.hour)
      );
    }

    return orderedMeals;
  } catch (error) {
    console.log("Error in getAllMeals: ", error);
  }
}
