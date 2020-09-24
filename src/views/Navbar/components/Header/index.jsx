import React, { useContext } from "react";
import { IconButton } from "../../../../components";
import { StyledBackButton, StyledHeader, StyledNavHeader, StyledSubtitle, StyledTitle, StyledTitleText } from "./styles";
import DataContext from "../../../../context/Context";

const Header = (props) => {
    const dataContext = useContext(DataContext);
    const {
        HandleLocation,
        locationItem
    } = dataContext;
    const { theme } = props;

    return (
        <StyledNavHeader>
            <StyledBackButton>
                <IconButton
                    hover
                    color={theme.primaryText}
                    icon={"arrow_back"}
                    size={5}
                    padding={1}
                />
            </StyledBackButton>
            <StyledHeader>
                <StyledSubtitle>ALAMAT PENGANTARAN</StyledSubtitle>
                <StyledTitle>
                    <StyledTitleText>
                        {locationItem}
                    </StyledTitleText>
                    <IconButton
                        onClick={() => HandleLocation()}
                        color={props.theme.addButton}
                        icon={"expand_more"}
                        size={5}
                        padding={0}
                    />
                </StyledTitle>
            </StyledHeader>
        </StyledNavHeader>
    )
}

export default Header