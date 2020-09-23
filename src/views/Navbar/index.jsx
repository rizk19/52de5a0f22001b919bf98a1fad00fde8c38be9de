import React from "react";
import styled from "styled-components";
import { Header, DateSelectorRow } from "./components";

const Navbar = (props) => {
    const { theme } = props;
    const StyledNavbar = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `;

    return (
        <StyledNavbar>
            <Header theme={theme} />
            <DateSelectorRow />
        </StyledNavbar>
    )
}

export default Navbar