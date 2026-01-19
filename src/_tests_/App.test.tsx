import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Routing", () => {
  test("renders Login page on / route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  test("renders HomePage on /home route", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /home page/i }),
    ).toBeInTheDocument();
  });
});
