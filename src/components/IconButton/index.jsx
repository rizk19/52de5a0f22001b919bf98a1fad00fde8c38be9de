import React from "react";
import styled from "styled-components";

const IconButton = ({ color, icon, size, hover, padding, ...rest }) => {
    const StyledButton = styled.a`
        width:  ${props => size ? props.theme.spacing[size] : props.theme.spacing[2]}; /* Preferred icon size */
        height:  ${props => size ? props.theme.spacing[size] : props.theme.spacing[2]}; /* Preferred icon size */
        display: flex;
        padding-top: ${props => props.theme.spacing[padding ? padding : 0]};
        padding-right: ${props => props.theme.spacing[padding ? padding : 0]};
        padding-bottom: ${props => props.theme.spacing[padding ? padding : 0]};
        cursor: pointer;
        border-radius: 50%;
        transition: background-color 0.15s linear;
        &:hover {
            background-color: ${props => hover ? props.theme.outline : null};
        };
    `

    const StyledIcon = styled.i`
        color: ${color};
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size:  ${props => size ? props.theme.spacing[size] : props.theme.spacing[2]}; /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        transition: color 0.2s linear;
    
        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
    
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
    
        /* Support for IE. */
        font-feature-settings: "liga";
        
        border: 0;
        
        &:hover {
            color: ${props => hover ? props.theme.addButton : null};
        }
        &:focus {
            outline: none;
        }
        &:active {
            outline: none;
            color: black;
            color: ${props => props.theme.cartButton};
        }
    `
    return (
        <StyledButton {...rest}>
            <StyledIcon>{icon}</StyledIcon>
        </StyledButton>
    )

}

export default IconButton