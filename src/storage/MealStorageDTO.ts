export type MealStorageDTO = {
  title: string;
  data: [
    {
      meal: string;
      description: string;
      hour: string;
      diet: string;
    }
  ];
};
