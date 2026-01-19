// describe - It is used to keep the group of related things like ui test , logic test
// render - it is used to render the components
// test - it take 3 parameters test("test",()=>{testing part },time(optional))
// except - it is used to check the result is matching with the code or not .
// we can use ( describe.only or describe.skip ) to run or skip the test case
// fireEvent -  it is called when we have to check some event like onChange , onClick etc
// toBeInDocument - It will check whether the things is present in document or not .
// screen.getByRole - It help to track the code from the screen
// memoryrouter -  it is used for the routing check
// beforeEach / afterEach - this is use when we want to run some code before or after every test inside the describe .
// .toBe("excat word")
// beforeAll / afterAll - this test case only one time before or after starting the test
// snapShot testing - It is used to compare the code with the previous one before pusing to production
// what should do you have to test - render component , api testing , event testing , props and state testing , conditional testing
// functional component -

import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Login Page", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders login heading", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "All fields are required",
    );

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("navigates to /home when form is valid", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(mockNavigate).toHaveBeenCalledWith("/home");
  });
});
