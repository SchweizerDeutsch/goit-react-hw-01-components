import styled from "styled-components";
// import { ifProp } from "polished";

export const FriendListItemContainer = styled.ul``;

export const Status = styled.span`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  color: #333333;
`;
