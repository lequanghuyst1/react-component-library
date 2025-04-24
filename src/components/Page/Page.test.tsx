import "@testing-library/jest-dom";
import PageComponent from ".";
import { render } from "@testing-library/react";

describe("PageComponent", () => {
  it("renders title and children", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(<PageComponent title={title}>{children}</PageComponent>);

    // Act
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
//   it("renders the correct styling", () => {
//     // Arrange
//     const title = "Test Title";
//     const children = "Test Children";
//     const { getByTestId } = render(<PageComponent title={title}>{children}</PageComponent>);

//     // Act
//     const container = getByTestId("page-container");

//     // Assert
//     expect(container).toHaveStyle(`
//     background-color: #f5f5f5;
//     `);
//   });
});
