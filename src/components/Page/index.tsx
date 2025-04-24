import React from "react";
import { Container } from "@mui/material";
import { PageComponentProps } from "./types";

const PageComponent: React.FC<PageComponentProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <>{children}</>
    </Container>
  );
};

export default PageComponent;
