import React from "react";

import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import { textHomePage } from "./textHomePage";
import Text from "../../shared/Text/Text";

const HomePage = () => {
  return (
    <Container>
      <Title text="Speed Reading Counter" />
      <Text text={textHomePage} />
    </Container>
  );
};

export default HomePage;
