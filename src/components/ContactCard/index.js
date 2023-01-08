import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Intro, Name } from "./style";
import face from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";

function ContactCard({ children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face} status="online" />
      <Name>尼采</Name>
      <Intro>所有的偏见源自内心。</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
