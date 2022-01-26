import React from 'react';
import PropTypes from 'prop-types';

const NearkatsListItem = ({ kat }) => (
  <li className="nearkats-item">
    <img className="nearkats-item__img" src={kat.srcImg} alt="image_name" />
    <div className="nearkats-item__header"></div>
  </li>
);

NearkatsListItem.propTypes = {
  kat: PropTypes.object,
};

export default NearkatsListItem;
