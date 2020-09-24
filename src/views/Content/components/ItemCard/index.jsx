import React from "react";
import styled from "styled-components";
import { Typography, IconButton } from "../../../../components";

const Card = styled.div`
    width:100%;
    height: 400px;
    background-color: white;
    border-radius: 8px;
    -webkit-box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    -moz-box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
    margin: 16px 0;
`

const CardMedia = styled.img`
    width:100%;
    height: 70%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
const CardContent = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height: 30%;
    padding: 8px 16px 16px 16px;
    box-sizing: border-box;
`

const Ratings = styled.div`
    display:flex;
    flex-direction: row;
`

const StarRows = styled.div`
    display:flex;
    justify-content: center;
	align-items: center;
	align-content: center;
    margin-left:4px;
`

const PriceRows = styled.div`
    display: flex;
    justify-content: flex-start;
	align-items: center;
	align-content: center;
`

const Spacer = styled.span`
    flex-grow: 1;
`

const AddButton = styled.div`
    cursor: pointer;
    width: 40px;
    padding: 8px 16px;
    display: flex;
    justify-content: flex-start;
	align-items: center;
    align-content: center;
    background-color: red;
    border-radius: 6px;
`

const ItemCard = (props) => {
    const { theme, params, Handler } = props;

    return (
        <Card>
            <CardMedia src={params.link}></CardMedia>
            <CardContent>
                <Ratings>
                    <Typography bold variant="p" size={1} color="secondary">{params.ratings}</Typography>
                    <StarRows>
                        <IconButton icon={params.ratings >= 1 ? "star" : "star_half"} color={theme.addButton} size={3} padding={0} />
                        <IconButton icon={params.ratings >= 2 ? "star" : "star_half"} color={theme.addButton} size={3} padding={0} />
                        <IconButton icon={params.ratings >= 3 ? "star" : "star_half"} color={theme.addButton} size={3} padding={0} />
                        <IconButton icon={params.ratings >= 4 ? "star" : "star_half"} color={theme.addButton} size={3} padding={0} />
                        <IconButton icon={params.ratings >= 5 ? "star" : "star_half"} color={theme.addButton} size={3} padding={0} />
                    </StarRows>
                </Ratings>
                <Typography className="mt-1 mb-1" bold variant="h5" color="primary">{params.dish_name}</Typography>
                <Typography className="mt-0 mb-1" bold variant="h6" color="secondary">by {params.producer} &#8226; {params.location}</Typography>
                <PriceRows>
                    <Typography className="mt-1 mb-1" bold variant="h5" color="primary">Rp {new Intl.NumberFormat(['ban', 'id']).format(params.price)}</Typography>
                    <Spacer />
                    <AddButton onClick={() => Handler(params)}>
                        <IconButton icon={"add"} color={theme.white} size={4} textsize={3} padding={0}>ADD</IconButton>
                    </AddButton>
                </PriceRows>
            </CardContent>
        </Card>
    )
}

export default ItemCard