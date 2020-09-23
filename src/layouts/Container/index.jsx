import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
    const StyledContainer = styled.div`
        display: flex;
        width: 370px;
        margin: auto;
    `;

    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container
