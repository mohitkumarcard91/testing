import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../pages/SignupPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Login Page", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders signup heading", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /SignUp/i }),
    ).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /signup/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "All fields are required",
    );

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("navigates to /home when form is valid", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /signup/i }));

    expect(mockNavigate).toHaveBeenCalledWith("/home");
  });
});
