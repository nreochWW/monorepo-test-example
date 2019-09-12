import * as React from "react";
import { storiesOf } from "@storybook/react";
import TestExampleOne from "../src/index";

storiesOf("TestExampleOne", module).add("TestExampleOne", () => (
  <TestExampleOne compiler="TypeScript" framework="React" />
));
