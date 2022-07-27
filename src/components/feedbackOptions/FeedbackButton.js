import styled from "styled-components";

export const FeedbackButton = styled.button`
width:100px;
border-radius:5px;
margin:15px;
padding:10px;
background-color:${({ theme }) => theme.colors.blue};
color:${({theme})=>theme.colors.white};
font-size:${({theme})=>theme.fontSizes[3]}px;
`