import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const OptionContainerStyles = css`
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: grid;
  place-items: center;
  justify-content: space-between;
  grid-template-columns: auto 170px;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  min-width: 180px;
`;

export const OptionsContainer = styled.div`
  margin-left: 1rem;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;
