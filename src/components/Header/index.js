import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import GoBackButton from "../GoBackButton";

export default function Header({ title, channel, roomId }) {
  const location = useLocation();

  return (
    <Title>
      <GoBackButton />
      {location.pathname.includes("channel/") ? (
        <Infodata>{channel}</Infodata>
      ) : (
        <Infodata>
          <Infodata>{roomId}</Infodata>
        </Infodata>
      )}
      {title}
    </Title>
  );
}

const Title = styled.h2`
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  font-size: 2em;
`;

const Infodata = styled.header`
  margin-bottom: 10px;
  font-size: 0.5em;
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
};
