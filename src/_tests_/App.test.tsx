import { render,screen} from "@testing-library/react";
import App from "../App";

test("renders app", () => {
  render(<App />);
  expect(true).toBeTruthy();
});

test("checking the content in app",()=>{
   render(<App />);
   expect(screen.getByText("Hello")).toBeInTheDocument();
})
