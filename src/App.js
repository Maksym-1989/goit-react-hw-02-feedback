import React, { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStateTotalValue = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return total;
  };

  positivePercentage = () => {
    const total = this.getStateTotalValue();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  onLeaveFeedback = (event) => {
    const currentStateKey = event.currentTarget.textContent;
    this.setState((prevState) => ({
      [currentStateKey]: prevState[currentStateKey] + 1,
    }));
  };

  render() {
    const stateKeysForBtn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalValue = this.getStateTotalValue();
    const positivePercentage = this.positivePercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={stateKeysForBtn}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {totalValue ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalValue}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
