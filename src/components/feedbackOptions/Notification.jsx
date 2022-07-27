import React    from "react";
import propTypes from 'prop-types';
import styled from "styled-components";

const StyledNotification = styled.p`
    font-size:${({ theme }) => theme.fontSizes[3]}px;
    color:${({ theme }) => theme.colors.grey};

`;

export const Notification = ({ message }) => {
    return (
        <div>
            <StyledNotification>{message}</StyledNotification>
        </div>
    )
    
};

Notification.propTypes = {
    message: propTypes.string.isRequired
}