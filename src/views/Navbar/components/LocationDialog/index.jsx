import React, { useContext } from "react";
import styled from "styled-components";
import { Typography, IconButton } from "../../../../components";
import DataContext from "../../../../context/Context";

const StyledDialog = styled.div`
    position: fixed;
    display: flex;
    width: inherit;
    height: 100%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
`

const StyledArea = styled.div`
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

const DialogHeader = styled.div`
    display: flex;
    width:100%;
	justify-content: flex-end;
	align-items: flex-start;
	align-content: center;
`

const DialogTitle = styled.div`
    display: flex;
    flex-wrap:wrap;
    width:100%;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: center;
`

const InputField = styled.div`
    position: relative;
    margin-bottom: ${props => props.theme.spacing[5]};
    width: 100%;
`

const Iconfield = styled.div`
    position:absolute;
    top: 20%;
    left:12px;
`

const Textfield = styled.input`
    border: 0.5px solid ${props => props.theme.outline};
    border-radius: 4px;
    width: 84%;
    padding: 12px 12px 12px 40px;
    &:focus {
        outline:0.5px solid ${props => props.theme.secondaryText} ;
        border-radius: 4px;
  }
`

const LocationList = styled.div`
    cursor: pointer;
    display: flex;
    width: 100%;
    padding: 8px;
    justify-content: flex-start;
	align-items: center;
    align-content: center;
    margin-bottom: ${props => props.theme.spacing[2]};
`

const LocationDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: ${props => props.theme.spacing[3]};
`

const LocationDialog = (props) => {
    const { theme } = props;
    const dataContext = useContext(DataContext);
    const {
        HandleLocationFalse
    } = dataContext;

    return (
        <StyledDialog>
            <StyledArea>
                <DialogHeader>
                    <IconButton onClick={() => HandleLocationFalse()} icon={"close"} color={theme.black} size={6} ></IconButton>
                </DialogHeader>
                <DialogTitle>
                    <Typography bold variant="h2" color="primary">Cek makanan yang tersedia di lokasi kamu!</Typography>
                </DialogTitle>
                <InputField>
                    <Iconfield>
                        <IconButton icon={"location_on"} color={theme.addButton} size={6} ></IconButton>
                    </Iconfield>
                    <Textfield></Textfield>
                </InputField>
                <LocationList>
                    <IconButton outline allpadding={1} icon={"location_on"} color={theme.secondaryText} size={6} ></IconButton>
                    <LocationDetails>
                        <Typography bold variant="p" size={2} color="primary">Lorem</Typography>
                        <Typography variant="p" size={1} color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod ab enim ducimus tenetur quasi iusto, vitae, blanditiis dolores repellendus, amet voluptatum dolor velit tempora ratione delectus eius consequatur sit.</Typography>
                    </LocationDetails>
                </LocationList>
                <LocationList>
                    <IconButton outline allpadding={1} icon={"location_on"} color={theme.secondaryText} size={6} ></IconButton>
                    <LocationDetails>
                        <Typography bold variant="p" size={2} color="primary">Kulina</Typography>
                        <Typography variant="p" size={1} color="primary">Jl. Tulodong Atas 28, Senayan, Kebayoran Baru Banget</Typography>
                    </LocationDetails>
                </LocationList>
                <LocationList>
                    <IconButton outline allpadding={1} icon={"location_on"} color={theme.secondaryText} size={6} ></IconButton>
                    <LocationDetails>
                        <Typography bold variant="p" size={2} color="primary">Pasaraya Manggari</Typography>
                        <Typography variant="p" size={1} color="primary">Manggarai</Typography>
                    </LocationDetails>
                </LocationList>
            </StyledArea>
        </StyledDialog>
    )
}

export default LocationDialog