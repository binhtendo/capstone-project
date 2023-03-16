import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }


`;
export const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #cad2c5;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  font-size: 20px;
  z-index: 1;
  border-top: 1px solid #354f52;
`;
