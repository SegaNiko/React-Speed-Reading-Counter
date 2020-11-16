import React from "react";

import ContainerStyle from "./styleContainer";

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
