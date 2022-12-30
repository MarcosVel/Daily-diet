import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    console.log("Error in getAllMeals: ", error);
  }
}
