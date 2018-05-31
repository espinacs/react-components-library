// eslint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-static-element-interactions
import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

require('./styles.css');

class Expandable extends React.Component {
  state = {
    expanded: false,
  };
  handleExpand = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { expanded } = this.state;
    const { title, content } = this.props;
    return !title ? null : (
      <Fragment>
        {/* title */}
        <button className="expandable-label" data-testid="title" onClick={this.handleExpand}>
          <span className="expandable-text">{title}</span>
        </button>
        {/* content */}
        { expanded &&
          <p data-testid="content">{content}</p>
        }
      </Fragment>
    );
  }
}

Expandable.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Expandable.defaultProps = {
  title: '',
  content: '',
};

export default Expandable;
