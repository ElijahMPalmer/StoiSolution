import React from 'react';
import styled from 'styled-components';
import InControl from './InControl';

function OutControl({ outOfControl, inControl }) {
    function randomPos() {
        const zone = Math.floor(Math.random() * 2 + 1);
        console.log('init zone: ', zone);
        const top = Math.trunc(Math.random() * (635 - 0) + 0);
        let left;
        //In top or bottom strip
        if(top < 155 || top > 475){
            left = Math.trunc(Math.random() * (635 - 0) + 0);
        } else { //In Middle Section
            
            console.log('Zone: ', zone)
                //Left Strip
                if(zone === 1){
                    console.log('going left');
                    left = Math.trunc(Math.random() * (140 - 0) + 0);
                } else {
                    console.log('going right');
                    left = Math.trunc(Math.random() * (635 - 475) + 475);
                }
        }
        console.log(`${top}px auto auto ${left}px`)
        return `${top}px auto auto ${left}px`;
    }

  return (
    <Container>
        {outOfControl.map((item, index) => (

            <PartOfProblem 
            key={index}
            position={randomPos()}
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
    inset: ${props => `${props.position}`};
`