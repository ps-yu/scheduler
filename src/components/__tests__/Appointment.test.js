/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render,waitForElement,fireEvent } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";
import Appointment from "../Appointment";

/*
  A test that renders a React Component
*/
describe("Appointment", ()=>{
  it ("renders without crashing", ()=>{
    render(<Appointment />)
  });
  it("Changes when the schedule a new day is selected", ()=>{
    const {getByText} = render(<Application/>);
    return waitForElement(()=> getByText("Monday")).then(()=>{
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  })
});