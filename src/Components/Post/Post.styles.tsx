import styled from "styled-components";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const showMoreStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export const CardContentCustom = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  flex-grow: 2;
  justify-content: space-between;
`;

export const CardCustom = styled(Card)`
  width: 400px;
  min-height: 185px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardHeaderCustom = styled(CardHeader)`
  .MuiCardHeader-root {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }
  .MuiCardHeader-content {
    overflow: hidden;
  }
`;

export const WrapperButtonActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
