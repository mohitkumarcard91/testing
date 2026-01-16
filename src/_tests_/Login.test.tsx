import { render, screen } from "@testing-library/react";
import Login from "../pages/Login"

describe("Login Component", () => {
  test("renders login heading", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { name: /login form/i })
    ).toBeInTheDocument();
  });

  test("renders name input field", () => {
    render(<Login />);

    const input = screen.getByPlaceholderText(/enter your name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });
});
