// eslint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-static-element-interactions
import React from 'react';
import { PropTypes } from 'prop-types';

require('./styles.css');

const Button = (props) => {
  const classType = props.type ? ` button-type-${props.type}` : '';
  return (
    <button data-testid="button" className={`button${classType}`} onClick={props.onPress}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
  type: null,
};

export default Button;
