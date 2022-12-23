import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: string;
  type?: ButtonTypeStyleProps;
};

export default function Button({
  title,
  icon,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest} activeOpacity={0.7}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
