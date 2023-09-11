import styled from "styled-components";

export const SCNCNavigation = styled.div<{ isSelected?: boolean }>`
  display: flex;
  height: 100%;
  width: 100px;
  justify-content: center;
  align-items: flex-end;
  font-weight: 500;
  padding: 8px 15px;
  gap: 10px;
  cursor: default;
  transition: 0.3s;
  font-size: 12px;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? `black` : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#20201F" : "#666666")};
  &:hover {
    cursor: pointer;
  }
  user-select: none;
`;
