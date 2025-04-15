import React from 'react';
import './messengerButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const MessengerButton = ({ stacked = false }) => {
  return (
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className={`messengerBtn ${stacked ? 'messengerBtn--stacked' : ''}`}
    >
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </a>
  );
};

export default MessengerButton;
