import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import OutControl from "./OutControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from "react";

function Home() {

    const [ outOfControl, setOutOfControl ] = useState([]);
    const [ inControl, setInControl ] = useState([]);
    const currEntry = useState('');
    const [ radioButton, setRadioButton ]= useState('InControl');

  return (
    <Container>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(radioButton === 'InControl'){
                    setInControl([...inControl , currEntry])
                }
                if(radioButton === 'OutControl'){
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
          id="in-control-radio"
          value="In my control" 
          control={<Radio />} 
          label="In my control" 
          onClick={function(){
              setRadioButton('InControl')
          }}
          />
          <FormControlLabel 
          id="out-control-radio"
          value="Out of my control" 
          control={<Radio />} 
          label="Out of my control" 
          onClick={function(){
            setRadioButton('OutControl')
        }}
          />
        </RadioGroup>
      </FormControl>
      <TextField 
      id="filled-basic"  
      variant="filled" 
      onChange={function(e){
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
