import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function addMeal(meal: MealStorageDTO) {
  try {
    const storedMeals = await getAllMeals();

    const storage = JSON.stringify([...storedMeals, meal]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    console.log(error);
  }
}
