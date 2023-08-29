import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import { FriendListContainer } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, ...rest }) => (
        <FriendListItem key={id} {...rest} />
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
