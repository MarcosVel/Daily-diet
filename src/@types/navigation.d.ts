export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal:
        | {
            meal: string;
            description: string;
            hour: string;
            date: string;
            diet: boolean;
          }
        | undefined;
      feedback: {
        diet: boolean;
      };
      meal: {
        item: {
          meal: string;
          description: string;
          hour: string;
          date: string;
          diet: boolean;
        };
      };
    }
  }
}
