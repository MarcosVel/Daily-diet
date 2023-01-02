import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feedback from "../screens/Feedback";
import Home from "../screens/Home";
import Meal from "../screens/Meal";
import NewMeal from "../screens/NewMeal";
import Statistics from "../screens/Statistics";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="statistics" component={Statistics} />
      <Stack.Screen name="newMeal" component={NewMeal} />
      <Stack.Screen name="feedback" component={Feedback} />
      <Stack.Screen name="meal" component={Meal} />
    </Stack.Navigator>
  );
}
