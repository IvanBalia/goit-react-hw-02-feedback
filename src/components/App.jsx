//import { render } from "@testing-library/react";
import React, { Component } from "react";
//import { onLeaveFeedback } from "./Buttons.js/onLeaveFeedback";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";

  export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };

    
    
    onLeaveFeedback = (option) => {
      this.setState(prevState => {
        return {
          good: prevState.good + 1 * (option === 'good'),
          neutral: prevState.neutral + 1 * (option === 'neutral'),
          bad: prevState.bad + 1 * (option === 'bad'),
        }
      })
    };

    countTotalFeedback(a,b,c) {
        return a+b+c
    };
    countPositiveFeedbackPercentage(g,t) {
      if (t === 0) { return 0 } else {return Math.round(g / t * 100) }
    };

    
  render () {
    return (
      <div>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
      </div>
    );
  }
};
