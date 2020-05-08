import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, children }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
