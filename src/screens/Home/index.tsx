import React from "react";
import logoImg from "../../assets/logo.png";
import { Container, Logo } from "./styles";

export default function Home() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
