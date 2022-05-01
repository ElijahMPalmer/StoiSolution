import React from 'react';
import styled from 'styled-components';
import InControl from './InControl';

function OutControl({ outOfControl, inControl }) {
    function randomPos() {

        const zone = Math.trunc(Math.random() * (3 - 1) + 1);
        let num;
        if(zone === 1){
            num = Math.trunc(Math.random() * (155 - 0) + 0);
        } else {
            num = Math.trunc(Math.random() * (650 - 475) + 475);
        }
        console.log(num)
        return num;
    }
  return (
    <Container>
        {outOfControl.map((item, index) => (

            <PartOfProblem 
            key={index}
            top={randomPos()}
            left={randomPos()}
            >
                {item}
            </PartOfProblem>
        ))}
        <InControl
            inControl={inControl}
        />
        
    </Container>
  )
}

export default OutControl;

const Container = styled.div`
    position: relative;
    border: 3px solid black;
    border-radius: 5px;
    width: 650px;
    height: 650px;
    margin-top: 25px;
`

const PartOfProblem = styled.div`
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
`