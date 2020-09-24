import React, { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../../../context/Context";
import { TwoGroupButton } from "../../../../components";

const StyledHandler = styled.div`
    width: 343px;
    display:flex;
    padding: 0 ${props => props.theme.spacing[3]};
    position: fixed;
    height: ${props => props.theme.spacing[9]};
    background-color: white;
    -webkit-box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    -moz-box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    transition: all 0.4s ease-in-out;
`

const EatTimeHandler = ({ showStyle, hiddenStyle }) => {
    const dataContext = useContext(DataContext);
    const {
        eatTime,
        HandleEatTime
    } = dataContext;

    return (
        <StyledHandler className={`handler${showStyle}${hiddenStyle}`}>
            <TwoGroupButton
                params={eatTime}
                leftTitle={"Lunch"}
                rightTitle={"Dinner"}
                Handler={HandleEatTime}
            />
        </StyledHandler>
    )
}

export default EatTimeHandler