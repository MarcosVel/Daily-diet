import { getAllMeals } from "./getAllMeals";

export async function statisticsMeals() {
  try {
    const allMeals = await getAllMeals();

    const dataMap = allMeals.map(item => item.data.map(itemData => itemData));

    function countRegisteredMeals() {
      const dataArrayMapLength = dataMap.map(item => item.length);

      const sumRegisteredMeals = dataArrayMapLength.reduce(
        (total: number, item: number) => total + item,
        0
      );

      return sumRegisteredMeals;
    }

    function countInsideAndOutDiet() {
      const dataArrayMap = dataMap.map(item => item);
      const flatMap = dataArrayMap.flat();

      const mealsInside = flatMap.filter(item => item.diet === "yes").length;

      const mealsOutside = flatMap.filter(item => item.diet === "no").length;

      return { mealsInside, mealsOutside };
    }

    const { mealsInside, mealsOutside } = countInsideAndOutDiet();

    const statistics = {
      registeredMeals: countRegisteredMeals() || 0,
      mealsInsideDiet: mealsInside,
      mealsOutsideDiet: mealsOutside,
    };

    return statistics;
  } catch (error) {
    console.log("Error in statisticsMeals: ", error);
  }
}
