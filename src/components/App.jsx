import { Component } from 'react';
import { FeedbackControls } from 'components/FeedbackControls/FeedbackControls';
import { Statistics } from 'components/Statistics/Statistics';

import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const btnName = e.currentTarget.name;
    console.log(btnName);

    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((count, value) => count + value, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = +((this.state.good * 100) / total).toFixed();

    return total ? percentage : null;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackControls
            options={Object.keys(this.state)}
            handler={this.handleFeedback}
          ></FeedbackControls>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback yet</p>
          )}
        </Section>
      </>
    );
  }
}
