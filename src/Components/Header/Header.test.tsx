import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("<Header/> is rendered", () => {
  render(<Header />);

  const element = screen.getByText("Weather - Today and The Week", {
    exact: false,
  });

  expect(element).toBeInTheDocument();
});
