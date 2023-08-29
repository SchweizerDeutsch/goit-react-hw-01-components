import styled from "styled-components";

export const StatisticsContainer = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5dfdf;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  padding: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-right: 10px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  color: #040000;
`;
