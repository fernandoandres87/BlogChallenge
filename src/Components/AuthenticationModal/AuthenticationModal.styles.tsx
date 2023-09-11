import Stack from "@mui/material/Stack";
import styled from "styled-components";

export const WrapperModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const ContentModal = styled.div<{ zIndex?: number }>`
  display: flex;
  flex-direction: column;
  z-index: ${({ zIndex }) => zIndex || 1};
  width: 270px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(18, 18, 18, 0.24);
  border-radius: 8px;
  font-family: "Work Sans";
  padding: 20px;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  & :hover {
    cursor: pointer;
  }
`;
export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :first-child {
    font-size: 20px;
  }
`;

export const WrapperFormComponents = styled.div<{ changeMargin?: boolean }>`
  margin-top: ${({ changeMargin }) => (changeMargin ? "20px" : "5px")};
`;

export const StackCustom = styled(Stack)`
  width: 100%;
  padding-top: 10px;
`;
