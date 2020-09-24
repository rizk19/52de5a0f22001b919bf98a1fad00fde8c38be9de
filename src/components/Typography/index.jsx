import React from "react";
import styled from "styled-components";

const Typography = (props) => {
    const { variant, children, size, color, bold, ...rest } = props;
    const Text = styled[variant ? variant : 'p']`
        margin: ${({ variant }) => variant === "p" ? 0 : ""};
        font-weight: ${({ bold }) => bold ? 700 : 400};
        font-size: ${props => props.size && props.theme.fontSize[props.size ? props.size : 2]};
        color: ${props => props.color === "primary" ? props.theme.primaryText : props.color === "secondary" ? props.theme.secondaryText : props.color === "light" ? props.theme.white : props.theme.black};
    `;

    const TextSlicer = (params) => {
        if (typeof params === "string") {
            return params.slice(0, 44) + "..."
        }
        return params;
    }
    return (
        <Text variant={variant} size={size} color={color} bold={bold} {...rest}>
            {children && children.length <= 50 ? children : TextSlicer(children)}
        </Text>
    )

}

export default Typography