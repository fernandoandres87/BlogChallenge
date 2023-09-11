import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const WrapperHeaderNavigation = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;
export const LogoutStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    text-transform: uppercase;
    user-select: none;
    font-size: 12px;
  }
`;
export const LogoutModalStyle = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(18, 18, 18, 0.24);
  border-radius: 8px;
  padding: 20px;
`;

export const AvatarCustom = styled(Avatar)`
  background-color: red;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;
