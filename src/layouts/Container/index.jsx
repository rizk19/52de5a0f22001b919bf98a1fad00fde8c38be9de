import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
    const StyledContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 370px;
        margin: auto;
        position: relative;
    `;

    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container
