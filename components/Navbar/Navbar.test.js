import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navbar from ".";

test("renders Navbar with three links", () => {
  const { getByAltText } = render(<Navbar />);
  const homeLink = getByAltText("Home");
  const favoritesLink = getByAltText("Favorite");
  const todoLink = getByAltText("Todo");

  expect(homeLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
  expect(todoLink).toBeInTheDocument();
});
