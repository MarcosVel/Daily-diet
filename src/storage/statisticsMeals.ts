import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./MealStorageDTO";

export async function statisticsMeals() {
  try {
    const allMeals = await getAllMeals();

    const dataMap = allMeals.map((item: MealStorageDTO) =>
      item.data.map((itemData) => itemData)
    );

    const flatMap = dataMap.flat();

    function rowInsideDiet() {
      const dietFlat = flatMap.map((item) => item.diet);

      let maxInRow = 0;
      let streak = 0;

      for (const element of dietFlat) {
        if (element) {
          streak++;
          maxInRow = Math.max(maxInRow, streak);
        } else {
          streak = 0;
        }
      }

      return maxInRow;
    }

    function countRegisteredMeals() {
      const dataArrayMapLength = dataMap.map((item) => item.length);

      const sumRegisteredMeals = dataArrayMapLength.reduce(
        (total: number, item: number) => total + item,
        0
      );

      return sumRegisteredMeals;
    }

    function countInsideAndOutDiet() {
      const mealsInside = flatMap.filter((item) => item.diet).length;

      const mealsOutside = flatMap.filter((item) => !item.diet).length;

      return { mealsInside, mealsOutside };
    }

    const { mealsInside, mealsOutside } = countInsideAndOutDiet();

    const statistics = {
      rowMealsDiet: rowInsideDiet() || 0,
      registeredMeals: countRegisteredMeals() || 0,
      mealsInsideDiet: mealsInside || 0,
      mealsOutsideDiet: mealsOutside || 0,
    };

    return statistics;
  } catch (error) {
    console.log("Error in statisticsMeals: ", error);
  }
}
