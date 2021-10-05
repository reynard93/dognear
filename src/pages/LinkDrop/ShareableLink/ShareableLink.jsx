/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import copyIcon from '../../../assets/images/copy-icon.svg';

const ShareableLink = ({ link }) => (
  <button
    className="shareable-link"
    type="button"
    onClick={() => {
      console.log('click', link);
    }}
  >
    <p className="shareable-link__text">{link} </p>
    <ReactSVG className="shareable-link__icon" src={copyIcon} />
  </button>
);

ShareableLink.propTypes = {
  link: PropTypes.string,
};

ShareableLink.defaultProps = {
  link: 'https://genc.win',
};

export default ShareableLink;
