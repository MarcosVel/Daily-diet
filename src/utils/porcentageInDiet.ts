import { statisticsMeals } from "../storage/statisticsMeals";

export default async function porcentageInDiet() {
  const { mealsInsideDiet, registeredMeals } = await statisticsMeals();

  const porcentage = ((mealsInsideDiet / registeredMeals) * 100).toFixed(2);

  let downFifty = false;
  if (Number(porcentage) < 50) {
    downFifty = true;
  }

  const stats = {
    porcentage: Number(porcentage) || 0,
    downFifty,
  };

  return stats;
}
