import React from "react";
import Button from "./Button";
import styled from "styled-components";

function App() {
  return (
    <>
   
    <h1 style={{textAlign:"center"}}>Color Changer</h1>
    <Container>
     
      <Button color="red" name="Red" />
      <Button color="blue" name="Blue" />
      <Button color="yellow" name="Yellow" />
      <Button color="green" name="Green" />
      <Button color="purple" name="Purple" />
      <Button color="white" name="White" />
    </Container>
    </>
  );

}
const Container = styled.div`
   display: flex;
  justify-content: center;
  flex-wrap:wrap;
  gap:1rem;
  align-items: center;
  width:100vw;
`;
export default App;
