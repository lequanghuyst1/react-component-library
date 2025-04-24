import React from "react";
import { PageComponentProps } from "./types";

const PageComponent: React.FC<PageComponentProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title} - this is my text</h1>
      {children}
    </div>
  );
};

export default PageComponent;
