import * as React from "react";
import { shallow } from "enzyme";
import TestExampleTwo from "../src/index";

describe("TestExampleTwo package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TestExampleTwo compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
