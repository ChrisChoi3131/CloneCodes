import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../Assets/headerLogo.jpeg"
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Header>
    <List>
      <Logo>
        <img width="40" height="40" src={headerLogo}/>
        <div>Dwitter</div>
      </Logo>
      <Item>
      </Item>
    </List>
  </Header>
);