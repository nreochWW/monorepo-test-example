import * as React from "react";
import styled from "styled-components";

export interface TestExampleOneProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const TestExampleOne = (props: TestExampleOneProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
  </Wrapper>
);

export default TestExampleOne;
