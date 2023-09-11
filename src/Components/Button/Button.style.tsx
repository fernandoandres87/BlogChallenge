import styled from "styled-components";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)`
  transition: 0.3s;
  display: flex;
  font-size: 12px;
  line-height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: red;
  padding: 7px 12px;
  cursor: pointer;
  min-width: 60px;
  color: #ffffff !important;
  background-color: #0088cc !important;

  &:hover {
    background-color: #006699 !important;
  }

  &:active {
    background-color: #006699;
    box-shadow: none;
  }

  &:focus {
    background-color: #004466;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.28);
  }

  &:disabled {
    background-color: #bfbfbf !important;
    box-shadow: none;
  }

  & svg,
  g {
    fill: #ffffff;
    width: 20px;
    height: 20px;
  }
`;
