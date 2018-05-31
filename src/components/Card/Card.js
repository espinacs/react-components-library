// eslint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-static-element-interactions
import React from 'react';
import { PropTypes } from 'prop-types';

require('./styles.css');

const Card = (props) => {
  const classType = props.type ? ` card-type-${props.type}` : '';
  return (
    <div className={`card ${classType}`}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['contrast', '']),
};

Card.defaultProps = {
  children: null,
  type: '',
};

export default Card;
