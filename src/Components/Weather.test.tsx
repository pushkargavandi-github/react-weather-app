import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

describe("Weather component tests", () => {
  test("check if city is displayed", () => {
    //arrange
    render(<Weather />);

    //act

    //assert
    const element = screen.getByText("Your City");
    expect(element).toBeInTheDocument();
  });

  test("check if Card component is in the DOM", () => {
    //arrange
    render(<Weather />);

    //act

    //assert
    const cardComponent = screen.findByTestId("card-component");
    expect(cardComponent).not.toBeNull();
  });

  test("check if Next Days component is in the DOM", () => {
    //arrange
    render(<Weather />);

    //act

    //assert
    const nextDaysComponent = screen.findByTestId("next-days-component");
    expect(nextDaysComponent).not.toBeNull();
  });
});
