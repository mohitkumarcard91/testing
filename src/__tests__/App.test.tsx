import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Routing", () => {
  test("renders Login page on / route", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByRole("heading", {
      name: /login/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders HomePage on /home route", async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByRole("heading", {
      name: /home page/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders SignupPage on /signup route", async () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByRole("heading", {
      name: /signup/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
