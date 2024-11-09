import { useState } from 'react';
import React from 'react'
import styled from 'styled-components';
function Button({color,name}) {
      const [colors,setColors] = useState("black")
  return (
   
      
    <div style={{    display: "flex",
        flexDirection: "column",
        alignItems: "center"}}>
  
    <Container style={{background:colors}}>
          </Container>
      <StyleButton onClick={()=>setColors(color)} style={{backgroundColor: color}} >{name}</StyleButton>
      </div>
    
  )
}
const StyleButton = styled.button`
  background: {colors};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;


`;
const Container = styled.div`
  height: 30vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  gap:1rem;
  align-items: center;

`;

export default Button
