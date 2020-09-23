import React from "react";
import { IconButton } from "../../../../components";
import { StyledBackButton, StyledHeader, StyledNavHeader, StyledSubtitle, StyledTitle, StyledTitleText } from "./styles";

const Header = (props) => {
    const { theme } = props;
    return (
        <StyledNavHeader>
            <StyledBackButton>
                <IconButton
                    hover
                    color={theme.primaryText}
                    icon={"arrow_back"}
                    size={4}
                    padding={1}
                />
            </StyledBackButton>
            <StyledHeader>
                <StyledSubtitle>ALAMAT PENGANTARAN</StyledSubtitle>
                <StyledTitle>
                    <StyledTitleText>
                        Tokopedia Tower
                </StyledTitleText>
                    <IconButton
                        onClick={() => alert('waw')}
                        color={props.theme.addButton}
                        icon={"expand_more"}
                        size={4}
                        padding={0}
                    />
                </StyledTitle>
            </StyledHeader>
        </StyledNavHeader>
    )
}

export default Header