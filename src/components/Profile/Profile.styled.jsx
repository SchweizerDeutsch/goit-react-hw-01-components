import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #555555;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #777777;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 20px;
  > li + li {
    margin-left: 20px;
  }
`;

export const StatItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #777777;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;
