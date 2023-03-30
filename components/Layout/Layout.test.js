import React from "react";
import { render } from "@testing-library/react";
import Layout from "../Layout";

test("renders the Navbar and children", () => {
  const { getByRole, getByText } = render(
    <Layout>
      <div>Das ist ein Test</div>
    </Layout>
  );

  const navbarElement = getByRole("navigation");
  expect(navbarElement).toBeTruthy();

  const childElement = getByText("Das ist ein Test");
  expect(childElement).toBeTruthy();
});
