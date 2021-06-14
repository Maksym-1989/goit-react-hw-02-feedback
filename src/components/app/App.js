import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Notification from "../notification/Notification";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";
import css from "./App.module.css";
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
    return total ? 0 : Math.round((this.state.good / total) * 100);
  };

  onLeaveFeedback = (event) => {
    console.log(event);
    const currentStateKey = event.currentTarget.textContent.toLowerCase();
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
      <div className={css.card}>
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
      </div>
    );
  }
}

export default App;
