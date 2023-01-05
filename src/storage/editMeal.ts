import { addMeal } from "./addMeal";
import { DeleteMeal } from "./deleteMeal";
import { MealStorageDTO } from "./MealStorageDTO";

type Props = {
  meal: string;
  description: string;
  hour: string;
  date: string;
  diet: string;
};

export async function EditMeal(oldMeal: Props, meal: MealStorageDTO) {
  try {
    await DeleteMeal(oldMeal);
    await addMeal(meal);
  } catch (error) {
    console.log("Error in EditMeal: ", error);
  }
}
