import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import OutControl from "./OutControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Home() {

    const [ outOfControl, setOutOfControl ] = useState([]);
    const [ inControl, setInControl ] = useState([]);
    const currEntry = useState('');
    const radioButton = useState('InControl');

  return (
    <Container>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(radioButton)
                console.log('This is the current In Control Elements', inControl);
                console.log('This is the current Out of Control Elements', outOfControl);
                if(radioButton[0] === 'InControl'){
                    console.log('InControlCondit')
                    setInControl([...inControl , currEntry])
                }
                if(radioButton[0] === 'OutControl'){
                    console.log('OutControlCondit')
                    setOutOfControl([...outOfControl , currEntry])
                }
            }}
        >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">This is:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="In my control"
          name="radio-buttons-group"
        >
          <FormControlLabel 
          value="In my control" 
          control={<Radio />} 
          label="In my control" 
          onClick={function(){
              radioButton[0]=('InControl')
          }}
          />
          <FormControlLabel 
          value="Out of my control" 
          control={<Radio />} 
          label="Out of my control" 
          onClick={function(){
            radioButton[0]=('OutControl')
        }}
          />
        </RadioGroup>
      </FormControl>
      <TextField 
      id="filled-basic"  
      variant="filled" 
      onChange={function(e){
          console.log('Current Entry: ', e.target.value)
          currEntry[0]=(e.target.value);
      }}
      />
      </form>
      <OutControl 
        outOfControl = {outOfControl}
        inControl = {inControl}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background: url("/images/gradient.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
