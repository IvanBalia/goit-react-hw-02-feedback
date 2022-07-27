import React from "react";
import propTypes from 'prop-types';
import { StatisticsList } from "./StatisticsList"
import { Notification } from "../feedbackOptions/Notification";
import { Container } from "components/ui/container";



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (total(good, neutral, bad) === 0 ?
        <Container>
            <Notification message="There is no feedback" />
        </Container>    :
        <Container>
            <StatisticsList>
                <li>good:{good}</li>
                <li>{`neutral:${neutral}`}</li>
                <li>{`bad:${bad}`}</li>
            </StatisticsList>
            <p>{`Total: ${total(good, neutral, bad)}`}</p>
            <p>{`Possitive feedback:${positivePercentage(good, total(good, neutral, bad))}%`}</p>
        </Container>)
};

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.shape.isRequired,
    positivePercentage: propTypes.shape.isRequired,
}