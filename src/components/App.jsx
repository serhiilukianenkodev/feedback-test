import { Component } from 'react';
import { FeedbackControls } from 'components/FeedbackControls/FeedbackControls';

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

  render() {
    return (
      <>
        <FeedbackControls
          options={Object.keys(this.state)}
          handler={this.handleFeedback}
        ></FeedbackControls>
      </>
    );
  }
}
