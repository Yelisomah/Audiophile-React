import React from 'react';
import { TextField } from '../components/FormElements';
import { useState } from 'react';

const Home: React.FC = () => {
   const [textValue, setTextValue] = useState("");
  return (
    <>
      <div>
        <h1>Welcome to Audiophile</h1>
        <p>Your one-stop shop for high-quality audio equipment.</p>
      </div>
      <TextField
          label="Name"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter your name" 
      />
    </>
    
  );
}


export default Home;


