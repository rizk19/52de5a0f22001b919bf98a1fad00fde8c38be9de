import styled from "styled-components";

export const StyledNavHeader = styled.div`
    display: flex;
    padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
`;

export const StyledBackButton = styled.div`
    padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[1]};
`;

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${props => props.theme.spacing[2]};
    padding-left: ${props => props.theme.spacing[1]};
`;

export const StyledTitle = styled.div`
    display: flex;
`;

export const StyledTitleText = styled.p`
    margin: 0;
    font-size: ${props => props.theme.fontSize[3]};
    font-weight: 600;
    color: ${props => props.theme.primaryText};
    line-height: 1.3;
`;

export const StyledSubtitle = styled.p`
    margin: 0;
    font-size: ${props => props.theme.fontSize[0]};
    font-weight: 400;
    color: ${props => props.theme.secondaryText};
`;