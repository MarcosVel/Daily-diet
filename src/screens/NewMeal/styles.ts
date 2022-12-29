import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
`;

export const Date = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  width: 20px;
`;

export const CreateMeal = styled(Button)`
  width: 100%;
  margin-top: auto;
`;
