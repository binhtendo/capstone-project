import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Filter from "../Filter";

test("Filter component renders input field", () => {
  const { getByPlaceholderText } = render(<Filter />);
  const inputField = getByPlaceholderText("filter");
  expect(inputField).toBeInTheDocument();
});
