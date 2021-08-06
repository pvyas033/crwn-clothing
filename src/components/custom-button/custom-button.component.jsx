import React from "react";

import { CustomButtonContainer } from "./custom.styles";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
