import React, { useContext } from "react";
import { Typography, IconButton } from "../../../../components";
import DataContext from "../../../../context/Context";
import { DialogHeader, DialogTitle, Iconfield, InputField, LocationDetails, LocationList, StyledArea, StyledDialog, Textfield } from "./styles";
import data from "../../data";

const LocationDialog = (props) => {
    const { theme } = props;
    const dataContext = useContext(DataContext);
    const {
        HandleLocationFalse,
        HandleDetailLocation
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
                {data.map(item =>
                    <LocationList key={item.idx} onClick={() => HandleDetailLocation(item.location_name)}>
                        <IconButton hover outline allpadding={1} icon={"location_on"} color={theme.secondaryText} size={6} />
                        <LocationDetails>
                            <Typography bold variant="p" size={2} color="primary">{item.location_name}</Typography>
                            <Typography variant="p" size={1} color="primary">{item.address}</Typography>
                        </LocationDetails>
                    </LocationList>
                )}
            </StyledArea>
        </StyledDialog>
    )
}

export default LocationDialog