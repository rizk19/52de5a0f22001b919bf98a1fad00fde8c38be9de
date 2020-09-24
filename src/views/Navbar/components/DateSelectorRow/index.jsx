import React, { useContext, useEffect } from "react";
import moment from 'moment';

import DataContext from "../../../../context/Context";
import { DateTypography, DayTypography, RoundDateButton, StyledDateRows } from "./styles";

const DateSelectorRow = (props) => {
    const dataContext = useContext(DataContext);
    const {
        dateIndex,
        HandleDate
    } = dataContext;

    const dataDate = []
    for (let index = 0; index < 14; index++) {
        let newdate = new Date();
        dataDate.push(newdate.setDate(newdate.getDate() + index))
    }

    useEffect(() => {
        HandleDate({ index: 0, data: dataDate && dataDate[0] })
        return () => HandleDate()
        // eslint-disable-next-line
    }, [])

    return (
        <StyledDateRows>
            {dataDate.map((item, idx) =>
                moment(item).format('ddd') === "Sab" ||
                    moment(item).format('ddd') === "Min" ?
                    <RoundDateButton disabled key={idx}>
                        <DayTypography>
                            {(moment(item).format('ddd')).toUpperCase()}
                        </DayTypography>
                        <DateTypography>
                            {(moment(item).format('DD')).toUpperCase()}
                        </DateTypography>
                    </RoundDateButton> :
                    <RoundDateButton key={idx} onClick={() => HandleDate({ index: idx, data: item })}
                        active={dateIndex === idx ? true : false} >
                        <DayTypography>
                            {(moment(item).format('ddd')).toUpperCase()}
                        </DayTypography>
                        <DateTypography>
                            {(moment(item).format('DD')).toUpperCase()}
                        </DateTypography>
                    </RoundDateButton>
            )}
        </StyledDateRows>
    )
}

export default DateSelectorRow