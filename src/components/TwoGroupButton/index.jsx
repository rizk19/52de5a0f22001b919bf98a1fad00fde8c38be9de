import React from "react";
import "./styles.scss";
import { StyledButtonLeft, StyledButtonRight, StyledGroupButton, StyledButtonTitle } from "./styles";

const TwoGroupButton = (props) => {
    const { leftTitle, rightTitle, params, Handler, ...rest } = props;

    return (
        <StyledGroupButton>
            <StyledButtonLeft className="btn"
                disabled={params === leftTitle ? true : false}
                onClick={() => Handler ? Handler(leftTitle) : null}
                {...rest}>
                <StyledButtonTitle>{leftTitle ? leftTitle : "Left"}</StyledButtonTitle>
            </StyledButtonLeft>
            <StyledButtonRight className="btn"
                disabled={params === rightTitle ? true : false}
                onClick={() => Handler ? Handler(rightTitle) : null}
                {...rest}>
                <StyledButtonTitle>{rightTitle ? rightTitle : "Right"}</StyledButtonTitle>
            </StyledButtonRight>
        </StyledGroupButton >
    )
}

export default TwoGroupButton