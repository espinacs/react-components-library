import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Steps, Button, Card, message } from 'antd';
import styles from './styles.module.css';

const { Step } = Steps;

class InstallSteps extends React.Component {
  state = {
    current: this.props.initialStep,
  };

  prev = () => {
    this.setState(({ current }) => ({ current: current - 1 }));
  };
  set = (num) => {
    this.setState(() => ({ current: num }));
  };
  next = () => {
    this.setState(({ current }) => ({ current: current + 1 }));
  };

  render() {
    const { current } = this.state;
    const { steps, onFinish } = this.props;
    return (steps && steps.length === 0) ? null : (
      <Fragment>
        <Card>
          <Steps progressDot current={current} className={styles.stepsMain}>
            {steps.map((item, idx) =>
              <Step key={item.title} title={item.title} onClick={() => this.set(idx)} />)}
          </Steps>
        </Card>

        <Card className={styles.stepsContent}>
          <div data-testid="step-content">
            <div className={styles.stepContentLeft} >
             <img src={steps[current].imgSrc} />
            </div>
            <div className={styles.stepContentRight} >
              {steps[current].content}
            </div>
          </div>

          <div className={styles.stepsAction}>
            { current > 0 &&
              <Button
                data-testid="button-prev"
                onClick={this.prev}
              >
                Previous
              </Button>
            }
            { current < steps.length - 1 &&
              <Button
                type="primary"
                data-testid="button-next"
                onClick={this.next}
              >
                Next
              </Button>
            }
            { current === steps.length - 1 &&
              <Button
                type="primary"
                data-testid="button-done"
                onClick={onFinish}
              >
                Done
              </Button>
            }
          </div>
        </Card>
      </Fragment>
    );
  }
}

InstallSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imgSrc: PropTypes.string,
  })),
  initialStep: PropTypes.number,
  onFinish: PropTypes.func,
};

InstallSteps.defaultProps = {
  steps: [],
  initialStep: 0,
  onFinish: () => message.success('Processing complete!'),
};

export default InstallSteps;
