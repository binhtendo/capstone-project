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
  background-color: #e76f51;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  font-size: 20px;
  z-index: 1;
  border-top: 1px solid #354f52;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const listItemStyles = {
  textAlign: "left",
  marginBottom: "1px",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  justifyContent: "space-between",
};

export const checkboxStyles = {
  float: "right",
  margin: "4px 10px 0 0",
};

export const textStyles = (isChecked, textLength) => ({
  textDecoration: isChecked ? "line-through" : "none",
  whiteSpace: "normal",
  wordBreak: "break-all",
  fontSize: textLength > 20 ? "3vw" : "4vw",
});

export const cardStyles = {
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  padding: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
  background: "rgba(255, 255, 255, 0.7)",
  maxWidth: "91%",
  margin: "0 auto",
  position: "relative",
};

export const buttonStyles = {
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "1.2rem",
  color: "#000",
  padding: "200",
  alignSelf: "flex-end",
};

export const togglePlaceStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
};

export const previousButton = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  bottom: "70px",
  left: "40%",
  transform: "translateX(-50%)",
  padding: "0 20px",
  zIndex: "2",
  backgroundColor: "#f4a261",
};

export const nextButton = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  bottom: "70px",
  right: "40%",
  transform: "translateX(50%)",
  padding: "0 20px",
  zIndex: "2",
  backgroundColor: "#f4a261",
};
