import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
        width:  ${props => props.size ? props.theme.spacing[props.size] : props.theme.spacing[2]}; /* Preferred icon size */
        height:  ${props => props.size ? props.theme.spacing[props.size] : props.theme.spacing[2]}; /* Preferred icon size */
        display: flex;
        padding: ${props => props.allpadding && props.theme.spacing[props.allpadding ? props.allpadding : 0]};
        padding-top: ${props => props.padding && props.theme.spacing[props.padding ? props.padding : 0]};
        padding-right: ${props => props.padding && props.theme.spacing[props.padding ? props.padding : 0]};
        padding-bottom: ${props => props.padding && props.theme.spacing[props.padding ? props.padding : 0]};
        cursor: pointer;
        border-radius: 50%;
        transition: background-color 0.15s linear;
        background-color: ${props => props.outline ? props.theme.background : null};
        &:hover {
            background-color: ${props => props.hover ? props.theme.outline : null};
        };
    `

const StyledIcon = styled.i`
        color: ${props => props.color ? props.color : "black"};
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size:  ${props => props.size ? props.theme.spacing[props.size] : props.theme.spacing[2]}; /* Preferred icon size */
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
            color: ${props => props.hover ? props.theme.addButton : null};
        };
        &:focus {
            outline: none;
        };
        &:active {
            outline: none;
            color: black;
            color: ${props => props.theme.cartButton};
        };
    `
const StyledTitleButton = styled.p`
        margin: 0;
        font-size:  ${props => props.textsize ? props.theme.spacing[props.textsize] : props.theme.spacing[2]}; /* Preferred icon textsize */
        padding: 0px;
        font-weight: 700;
        color: ${props => props.color ? props.color : "black"};
    `

const IconButton = ({ color, icon, size, textsize, hover, padding, children, outline, allpadding, ...rest }) => {

    return (
        <StyledButton size={size} hover={hover} outline={outline} padding={padding} allpadding={allpadding} {...rest}>
            {children && <StyledTitleButton textsize={textsize} color={color} {...rest}>{children}</StyledTitleButton>}
            <StyledIcon color={color} size={size} hover={hover} {...rest}>{icon}</StyledIcon>
        </StyledButton>
    )

}

export default IconButton