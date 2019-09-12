import * as React from "react";
import { shallow } from "enzyme";
import TestExampleOne from "../src/index";

describe("TestExampleOne package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <TestExampleOne compiler="TypeScript" framework="React" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
