import React from "react";
import { StatisticsList } from "./Statistics/StatisticsList"
import { Notification } from "./Notification";



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (total(good, neutral, bad) === 0 ?
        <Notification message="There is no feedback"/>:
        <div>
        <StatisticsList>
        <li>good:{good}</li>
        <li>{`neutral:${neutral}`}</li>
        <li>{`bad:${bad}`}</li>
        </StatisticsList>
        <p>{`Total: ${total(good,neutral,bad)}`}</p>
        <p>{`Possitive feedback:${positivePercentage(good,total(good,neutral,bad))}%`}</p>
        </div>)
    }