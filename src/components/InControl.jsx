import React from 'react';
import styled from 'styled-components';

function InControl({ inControl }) {
  return (
    <Container>


    </Container>
  )
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
`