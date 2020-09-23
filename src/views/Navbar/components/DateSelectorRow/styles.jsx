import styled from "styled-components";

export const StyledDateRows = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
    height: 0;
    background: transparent;
        button:first-child {
            background-position: 0 -100%;
        };
    }
`
export const RoundDateButton = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width:2.5rem;
    height:2.5rem;
    padding: 8px 1rem 0 1rem;
    align-items: center;
    margin: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[1]} 0 ${props => props.theme.spacing[2]};
    border-radius: 50%;
    border: 0;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, ${({ active, theme }) => (active ? theme.primaryText : theme.white)} 50%, ${props => (props.theme.primaryText)} 50%);
    transition: background-position 0.7s;
    p {
        color: ${({ active, theme }) => (active ? theme.white : theme.primaryText)};
    }
    &:focus {
        outline: none;
        border: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        background-position: 0 -100%;
        transition: background-position 0.7s;
    };
    &:visited {
        background-position: 0 100%;
    };
    &:active {
        outline: none;
    };
    &:disabled{
        cursor: unset;
        p {
            color: ${props => props.theme.background}
        }
    };
`


export const DayTypography = styled.p`
    margin: 0;
    font-weight: 300;
    font-size: 8px;
`

export const DateTypography = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 16px;
`

