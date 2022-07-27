import React from 'react';
import propTypes from 'prop-types';
import { FeedbackButton } from "./FeedbackButton"
import { Container } from 'components/ui/container';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<Container>
        <p>Please leave feedback</p>
        {options.map(option =>
        (<FeedbackButton
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}>{option}
        </FeedbackButton>)
        )
        }
        </Container>   
    )
};

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.shape.isRequired
}

