import { render, screen } from "@testing-library/react";
import GetByRole from "../pages/GetByRole";

describe("GetByRole Page", () => {
  beforeEach(() => {
    render(<GetByRole />);
  });
  test("render heading", () => {
    const heading = screen.getByRole("heading", { name: /GetByRole/i });
    expect(heading).toBeInTheDocument();
  });

  test("render input box", () => {
    const input = screen.getByRole("textbox", { name: "Search" });
    const numberInput = screen.getByRole("spinbutton", { name: "Age" });
    expect(numberInput).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("find the button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
