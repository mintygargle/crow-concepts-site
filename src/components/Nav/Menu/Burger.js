import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen, Style = StyledBurger }) => {
  return (
    <Style open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Style>
  );
};

// Property requirements
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger;
