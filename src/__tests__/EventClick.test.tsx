import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import EventClick from "../pages/EventClick";

describe("Testing for event using the userEvent", () => {
  test("Onclick test", async () => {
    const user = userEvent.setup();
    render(<EventClick />);
    const btn = screen.getByRole("button");
    await user.click(btn);
    expect(screen.getByText("hi")).toBeInTheDocument();
  });

  test("onchange event", async () => {
    const user = userEvent.setup();
    render(<EventClick />);
    const inputBox = screen.getByRole("textbox");
    await user.type(inputBox, "mohit");
    expect(screen.getByText("mohit")).toHaveTextContent("mohit");
  });
});

