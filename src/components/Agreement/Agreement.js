// eslint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-static-element-interactions
import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Card from '../Card';
import Button from '../Button';
import Expandable from './Expandable';

require('./styles.css');

class Agreement extends React.Component {
  state = {
    expanded: this.props.expanded,
    accepted: this.props.accepted,
  };

  handleExpand = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };
  handleAcceptance = () => {
    this.setState(({ accepted }) => ({ accepted: !accepted }), this.props.onAccept);
  };

  render() {
    const { expanded, accepted } = this.state;
    const { text, agreementLabel } = this.props;
    return (
      <Fragment>
        {/* part superior */}
        <div className="agreement-header">
          <div className="agreement-header-left">
            <Button onClick={this.handleExpand}>{`Read the ${agreementLabel}`}</Button>
          </div>
          <div className="agreement-header-right">
            {accepted ? 'ok' : 'ko'}
          </div>
        </div>
        {/* agreements */}
        { expanded &&
        <div className="agreements-body">
          <Card>
            {text.map(item => <Expandable {...item} />)}
          </Card>
        </div>
        }
        {/* acceptance */}
        <Card classes="card-black">
          <p>I have read and accepted the {agreementLabel}</p>
          <Button onClick={this.handleAcceptance}>
            {`${accepted ? 'ok' : 'ko'} Accept`}
          </Button>
        </Card>
      </Fragment>
    );
  }
}

Agreement.propTypes = {
  text: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  agreementLabel: PropTypes.string,
  expanded: PropTypes.bool,
  accepted: PropTypes.bool,
  onAccept: PropTypes.func,
};

Agreement.defaultProps = {
  text: [],
  expanded: false,
  accepted: false,
  onAccept: () => {},
  agreementLabel: 'Read',
};

export default Agreement;
