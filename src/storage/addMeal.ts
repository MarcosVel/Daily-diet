import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function addMeal(meal: MealStorageDTO) {
  try {
    const storedMeals = await getAllMeals();

    const mealsSameDay = storedMeals.filter(
      (meals: MealStorageDTO) => meals.title === meal.title
    );

    if (mealsSameDay.length > 0) {
      const itemIndex = storedMeals.findIndex(
        (item: MealStorageDTO) => item.title === meal.title
      );
      storedMeals[itemIndex].data.push(...meal.data);
    } else {
      storedMeals.push(meal);
    }

    const storage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    console.log("Error in addMeal: ", error);
  }
}
