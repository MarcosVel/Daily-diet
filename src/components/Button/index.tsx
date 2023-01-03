import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: string;
  full?: boolean;
  type?: ButtonTypeStyleProps;
};

export default function Button({
  title,
  icon,
  full,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} full={full} activeOpacity={0.7} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
