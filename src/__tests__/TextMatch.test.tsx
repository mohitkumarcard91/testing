import { render, screen } from "@testing-library/react";
import TextMatch from "../pages/TextMatch";

describe("TextMatch", () => {
  test("TextMatch test using String", () => {
    render(<TextMatch />);
    // const headingElement = screen.getByText("Text Match", { exact: false });
    const headingElement = screen.getByText(/Text Match/i);
    const divtext = screen.getByText((content)=>content.endsWith("function"))

    expect(headingElement).toBeInTheDocument();
    expect(divtext).toBeInTheDocument()
    
  });
});

