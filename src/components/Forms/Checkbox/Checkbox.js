import React, { useState, useEffect } from "react";
import Box from "./Box";

const Checkbox = ({ Style = Box }, props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked);
  });

  return (
    <Style
      {...props}
      checked={checked}
      onClick={() => setChecked(!checked)}
    ></Style>
  );
};

export default Checkbox;
