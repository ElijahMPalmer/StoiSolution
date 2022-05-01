import React from "react";
import styled from "styled-components";

function InControl({ inControl }) {
    function randomPos() {
        const top = Math.trunc(Math.random() * (300 - 0) + 0);
        const left = Math.trunc(Math.random() * (300 - 0) + 0);
        return `${top}px auto auto ${left}px`;
      }
  return (
    <Container>
      {inControl.map((item, index) => (
        <PartOfProblem 
        key={index} 
        position={randomPos()}
        onClick={(e) => {
            e.target.remove()
        }}
        >
          {item}
        </PartOfProblem>
      ))}
    </Container>
  );
}

export default InControl;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;

const PartOfProblem = styled.div`
  position: absolute;
  inset: ${(props) => `${props.position}`};
`;
