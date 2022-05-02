import React from "react";
import styled from "styled-components";

function InControl({ inControl }) {
    function randomPos() {
        let maxTop;
        let maxLeft;
        if(window.innerWidth < 780){
            maxTop = 140;
            maxLeft = 140;
        } else {
          maxTop = 290;
          maxLeft = 290;
        }
        const top = Math.trunc(Math.random() * (maxTop - 0) + 0);
        const left = Math.trunc(Math.random() * (maxLeft - 0) + 0);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 780px) {
    width: 150px;
    height: 150px;
    font-size: 10px;
  }
`;

const PartOfProblem = styled.div`
  color: green;
`;
