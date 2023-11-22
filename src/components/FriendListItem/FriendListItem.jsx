import React from "react";
import PropTypes from "prop-types";
import {
  FriendListItemContainer,
  Status,
  Avatar,
  FriendName,
} from "./FriendListItem.styled";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemContainer>
      <Status $isHide={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
