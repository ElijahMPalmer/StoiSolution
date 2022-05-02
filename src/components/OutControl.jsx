import React from "react";
import styled from "styled-components";
import InControl from "./InControl";

function OutControl({ outOfControl, inControl }) {


  function randomPos() {
      let maxTop;
      let maxLeft;
      let leftGap;
      let rightGap;
      let topGap;
      let bottomGap;

      if(window.innerWidth < 780){
          maxTop = 290;
          maxLeft = 290;
          leftGap = 65;
          rightGap = 235;
          topGap = 75;
          bottomGap = 225;
      } else {
        maxTop = 635;
        maxLeft = 635;
        leftGap = 140;
        rightGap = 475;
        topGap = 155;
        bottomGap = 475;
      }
    const zone = Math.floor(Math.random() * 2 + 1);
    console.log("init zone: ", zone);
    const top = Math.trunc(Math.random() * (maxTop - 0) + 0);
    let left;
    //In top or bottom strip
    if (top < topGap || top > bottomGap) {
      left = Math.trunc(Math.random() * (maxLeft - 0) + 0);
    } else {
      //In Middle Section

      console.log("Zone: ", zone);
      //Left Strip
      if (zone === 1) {
        console.log("going left");
        left = Math.trunc(Math.random() * (leftGap - 0) + 0);
      } else {
        console.log("going right");
        left = Math.trunc(Math.random() * (maxLeft - rightGap) + rightGap);
      }
    }
    console.log(`${top}px auto auto ${left}px`);
    return `${top}px auto auto ${left}px`;
  }

  return (
    <Container>
      <OutOfControl>
        {outOfControl.map((item, index) => (
          <PartOfProblem
            key={index}
            position={randomPos()}
            onClick={(e) => {
              e.target.remove();
            }}
          >
            {item}
          </PartOfProblem>
        ))}
        <InControl inControl={inControl} />
      </OutOfControl>
      <h4>Note: Outside Square are things that are <em>out</em> of your control. Inside Square are things that are <em>in</em> your control.</h4>
    </Container>
  );
}

export default OutControl;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
        max-width: 500px;
    }
`

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
  position: absolute;
  display: inline-block;
  inset: ${(props) => `${props.position}`};
  color: red;
`;
