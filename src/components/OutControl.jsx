import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import InControl from "./InControl";

function OutControl({ outOfControl, inControl }) {
  let firstHalfArr = outOfControl.slice(0, outOfControl.length / 2);
  let lastHalfArr = outOfControl.slice(outOfControl.length / 2);
  
  let gap;

  if (window.innerWidth < 780) {
    gap = 75;
  } else {
    gap = 155;
  }

  if (outOfControl.length > 1) {
    return (
      <Container>
        <OutOfControl>
          <TopSection gap={gap}>
          {firstHalfArr.map((item, index) => (
            <PartOfProblem
              key={index}
              onClick={(e) => {
                e.target.remove();
              }}
            >
              {item}
            </PartOfProblem>
          ))}
          </TopSection>
          <InControl inControl={inControl} />
          <BottomSection gap={gap}>
          {lastHalfArr.map((item, index) => (
            <PartOfProblem
              key={index}
              onClick={(e) => {
                e.target.remove();
              }}
            >
              {item}
            </PartOfProblem>
          ))}
          </BottomSection>
        </OutOfControl>
        <h4>
          Note: Outside Square are things that are <em>out</em> of your control.
          Inside Square are things that are <em>in</em> your control.
        </h4>
      </Container>
    );
  } else {
    return (
      <Container>
        <OutOfControl>
          {outOfControl.map((item, index) => (
            <PartOfProblem
              key={index}
              onClick={(e) => {
                e.target.remove();
              }}
            >
              {item}
            </PartOfProblem>
          ))}
          <InControl inControl={inControl} />
        </OutOfControl>
        <h4>
          Note: Outside Square are things that are <em>out</em> of your control.
          Inside Square are things that are <em>in</em> your control.
        </h4>
      </Container>
    );
  }
}

export default OutControl;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    max-width: 500px;
  }
`;

const OutOfControl = styled.div`
  position: relative;
  border: 3px solid black;
  border-radius: 5px;
  width: 650px;
  height: 650px;
  margin-top: 25px;
  @media (max-width: 780px) {
    width: 300px;
    height: 300px;
    font-size: 10px;
  }
`;

const PartOfProblem = styled.div`
`;

const TopSection = styled.div`
  height: ${props => `${props.gap}px`};
  position: absolute;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  width: 100%;
`;
const BottomSection = styled.div`
  height: ${props => `${props.gap}px`}; 
  position: absolute;
  bottom: 0;
  left:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  width: 100%;
`;
