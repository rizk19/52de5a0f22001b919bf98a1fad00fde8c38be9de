import styled from "styled-components";

export const StyledGroupButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
`

export const StyledButtonLeft = styled.button`
border-right: 0px;
border-radius: 5px 0 0 5px;
background-color: ${props => props.theme.primaryText};
color: ${props => props.theme.white};
&:disabled {
background-color: white;
    border : 0.2px solid ${props => props.theme.background};
    p {
        color: ${props => props.theme.background};
    };
};
`
export const StyledButtonRight = styled.button`
border-left: 0px;
border-radius: 0 5px 5px 0;
background-color: ${props => props.theme.primaryText};
color: ${props => props.theme.white};
&:disabled {
background-color: white;
    border : 0.2px solid ${props => props.theme.background};
    p {
        color: ${props => props.theme.background};
    };
};
`

export const StyledButtonTitle = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: ${props => props.theme.fontSize[1]};
`