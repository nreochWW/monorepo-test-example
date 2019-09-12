import * as React from "react";
import styled from "styled-components";
import TestExampleOne from "test-example-one";

export interface TestExampleTwoProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const TestExampleTwo = (props: TestExampleTwoProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
    <TestExampleOne compiler="TypeScript" framework="React" />
  </Wrapper>
);

export default TestExampleTwo;
