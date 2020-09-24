import styled from "styled-components";

export const StyledDialog = styled.div`
position: fixed;
display: flex;
width: inherit;
height: 100%;
bottom: 0;
background-color: rgba(0, 0, 0, 0.4);
transition: all 0.4s ease-in-out;
`

export const StyledArea = styled.div`
position: absolute;
display: flex;
flex-direction:column;
bottom: 0;
width: 328px;
height: 80%;
overflow: auto;
padding: ${props => props.theme.spacing[5]};
background-color: ${props => props.theme.white};
border-radius: 12px 12px 0 0;
`

export const DialogHeader = styled.div`
display: flex;
width:100%;
justify-content: flex-end;
align-items: flex-start;
align-content: center;
`

export const DialogTitle = styled.div`
display: flex;
flex-wrap:wrap;
width:100%;
justify-content: flex-start;
align-items: flex-start;
align-content: center;
`

export const InputField = styled.div`
position: relative;
margin-bottom: ${props => props.theme.spacing[5]};
width: 100%;
`

export const Iconfield = styled.div`
position:absolute;
top: 20%;
left:12px;
`

export const Textfield = styled.input`
border: 0.5px solid ${props => props.theme.outline};
border-radius: 4px;
width: 84%;
padding: 12px 12px 12px 40px;
&:focus {
    outline:0.5px solid ${props => props.theme.secondaryText} ;
    border-radius: 4px;
}
`

export const LocationList = styled.div`
cursor: pointer;
display: flex;
width: 100%;
padding: 8px;
justify-content: flex-start;
align-items: center;
align-content: center;
margin-bottom: ${props => props.theme.spacing[2]};
`

export const LocationDetails = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin-left: ${props => props.theme.spacing[3]};
`