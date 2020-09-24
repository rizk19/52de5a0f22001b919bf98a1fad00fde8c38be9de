import React, { useContext, useState } from "react";
import styled from "styled-components";
import moment from 'moment';

import { EatTimeHandler, useScrollThrottled, ItemCard, ItemCart } from "./components";
import { Typography } from "../../components";
import DataContext from "../../context/Context";
import "./styles.scss";
import data from "./data";

const StyledContent = styled.div`
    height: 1200px;
`;

const ContentSection = styled.div`
    transition: all 0.4s ease-in-out;
`

const Content = (props) => {
    const { theme } = props;
    const dataContext = useContext(DataContext);
    const {
        dateTime,
        HandleCart,
        cart
    } = dataContext;

    const [shouldHideHandler, setShouldHideHandler] = useState(false);
    const [shouldShowHandler, setShouldShowHandler] = useState(false);

    const MINIMUM_SCROLL = 20;
    const TIMEOUT_DELAY = 200;

    useScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowHandler(currentScrollTop === 0);

        setTimeout(() => {
            setShouldHideHandler(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const showStyle = shouldShowHandler ? '-appeared' : '';
    const hiddenStyle = shouldHideHandler ? '-hidden' : '';

    return (
        <StyledContent>
            <EatTimeHandler
                showStyle={showStyle}
                hiddenStyle={hiddenStyle}
            />
            <ContentSection className={`content${showStyle}${hiddenStyle}`}>
                <Typography className="mb-2" bold variant="h5">{moment(dateTime).format('dddd, Do MMMM YYYY')}</Typography>
                {data.map(item =>
                    <React.Fragment key={item.idx}>
                        <ItemCard Handler={HandleCart} theme={theme} params={item}></ItemCard>
                    </React.Fragment>
                )}
            </ContentSection>
            {cart && <ItemCart theme={theme}></ItemCart>}
        </StyledContent>
    )
};

export default Content