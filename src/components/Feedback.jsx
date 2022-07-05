import React, { Component } from "react";
import { FeedbackButton } from "./Buttons.js/Button";
import { StatisticsList } from "./Statistics/StatisticsList";

export class Feedback extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            };
        });
    };
    handleNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };
    handleBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };
    countTotalFeedback() {
        return this.state.good+this.state.neutral+this.state.bad
    };
    countPositiveFeedbackPercentage() {
        return Math.round(this.state.good/this.countTotalFeedback()*100)
    };



    
    
    render() {
        console.log(this.buttonsData);
        return (
            <div>
                <ul>
                    <FeedbackButton type="button" onClick={this.handleGood}>Good</FeedbackButton>
                    <FeedbackButton type="button" onClick={this.handleNeutral}>Neutral</FeedbackButton>
                    <FeedbackButton type="button" onClick={this.handleBad}>Bad</FeedbackButton>
                </ul>
                <p>Statistics</p>
                <StatisticsList>
                    <li>{`Good:${this.state.good}`}</li>
                    <li>{`Neutral:${this.state.neutral}`}</li>
                    <li>{ `Bad:${this.state.bad}`}</li>
                </StatisticsList>
                <p>{`Total:${this.countTotalFeedback()}`}</p>
                <p>{ `c${this.countPositiveFeedbackPercentage()}%`}</p>
                </div>)
    }

}