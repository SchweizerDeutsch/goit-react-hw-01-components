import React from "react";
import PropTypes from "prop-types";

import {
  StatisticsContainer,
  Title,
  StatList,
  StatsItem,
  Label,
  Percentage,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
