import { render, screen } from "@testing-library/react";
import Weather from "./Components/Weather";

test("check if city is displayed", () => {
  //arrange
  render(<Weather />);

  //act

  //assert
  const element = screen.getByText("Your City");
  expect(element).toBeInTheDocument();
});

/* test('response from api', () => {
    render(<Weather />);

    const element = screen.getByRole()
}) */
