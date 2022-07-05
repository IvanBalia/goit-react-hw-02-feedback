import { FeedbackButton } from "./Buttons.js/Button"


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div>
        <p>Please leave feedback</p>
        {
            options.map(option =>
                (<FeedbackButton type="button" onClick={()=>onLeaveFeedback(option)} key={option}>{option}</FeedbackButton>)
            )
        }
        </div>
        
    )
};