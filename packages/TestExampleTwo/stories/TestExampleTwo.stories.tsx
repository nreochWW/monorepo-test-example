import * as React from "react";
import { storiesOf } from "@storybook/react";
import TestExampleTwo from "../src/index";

storiesOf("TestExampleTwo", module).add("TestExampleTwo", () => (
  <TestExampleTwo compiler="TypeScript" framework="React" />
));
