import React, { useContext } from "react";
import styled from "styled-components";
import { Typography, IconButton } from "../../../../components";
import DataContext from "../../../../context/Context";

const StyledCart = styled.div`
    position: fixed;
    display: flex;
    width: 322px;
    height: 55px;
    padding: 0 ${props => props.theme.spacing[3]};
    bottom: 12px;
    background-color: ${props => props.theme.cartButton};
    margin-left:12px;
    border-radius:4px;
    justify-content: flex-start;
	align-items: center;
	align-content: center;
    transition: all 0.4s ease-in-out;
`
const CartInfo = styled.div`
    position: fixed;
    flex-direction:column;
    justify-content: flex-start;
	align-items: center;
	align-content: center;
`
const Spacer = styled.span`
    flex-grow: 1;
`

const ItemCart = (props) => {
    const { theme } = props;
    const dataContext = useContext(DataContext);
    const {
        cartItem
    } = dataContext;

    return (
        <StyledCart>
            <CartInfo>
                <Typography className="mt-0 mb-0" bold variant="h5" color="light">{cartItem.quantity} Items | Rp {new Intl.NumberFormat(['ban', 'id']).format(cartItem.price)}</Typography>
                <Typography variant="p" size={1} color="light">Termasuk Ongkos Kirim</Typography>
            </CartInfo>
            <Spacer />
            <IconButton icon={"shopping_cart"} color={theme.white} size={6} padding={0}></IconButton>
            <IconButton icon={"navigate_next"} color={theme.white} size={6} padding={0}></IconButton>
        </StyledCart>
    )
}

export default ItemCart