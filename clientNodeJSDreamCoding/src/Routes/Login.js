import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: black;
  padding: 30px;
`;
const Input = styled.input`
  margin-top:10px;
  width : 100%;
  height : 30px;
`;

const Checkbox = styled.input`
  margin-top:10px;
  width : 30px;
  height : 30px;
`;

export default () => (
  <>
    <Container>
      <Input placeholder="ID" />
      <Input placeholder="PW" />
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Profile Image URL" />
      <div>
        <Checkbox type="checkbox"  id="SignUp" name="SignUp"/>
        <label for="SignUp"> Create a new account?</label>
      </div>
    </Container>
  </>
);