import React, { useContext } from "react";
import styled from "styled-components";
import { Header, DateSelectorRow, LocationDialog } from "./components";
import DataContext from "../../context/Context";

const StyledNavbar = styled.div`
        display: flex;
        flex-direction: column;
        width: 368px;
        background-color: white;
        position: fixed;
        overflow: hidden;
        z-index: 500;
    `;

const Divider = styled.hr`
        display: block;
        width: 368px;
        border-top: 0.2px solid ${props => props.theme.outline};
        margin-bottom: 0;
    `;

const Navbar = (props) => {
    const { theme } = props;
    const dataContext = useContext(DataContext);
    const {
        location
    } = dataContext;

    return (
        <StyledNavbar>
            <Header theme={theme} />
            <DateSelectorRow />
            <Divider />
            {location && <LocationDialog theme={theme} />}
        </StyledNavbar>
    )
}

export default Navbar