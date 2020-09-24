import React, { useState, useReducer } from "react";

import dataReducer from "./reducer";
import DataContext from "./Context";

import {
  SET_DATE,
  SET_EAT_TIME,
  SET_CART,
  SET_LOCATION_TRUE,
  SET_LOCATION_FALSE,
  SET_DETAIL_LOCATION,
} from "./types";

const Datas = (props) => {
  const [initialState] = useState({
    dateIndex: 0,
    dateTime: null,
    eatTime: "Lunch",
    location: false,
    locationItem: "Tokopedia Tower",
    cart: false,
    cartItem: {
      quantity: 0,
      price: 0,
    },
  });

  const [resState, dispatch] = useReducer(dataReducer, initialState);

  const HandleDate = (params) => {
    if (params) {
      dispatch({
        type: SET_DATE,
        payload: {
          index: params.index,
          data: params.data,
        },
      });
    }
  };

  const HandleEatTime = (params) => {
    dispatch({
      type: SET_EAT_TIME,
      payload: params,
    });
  };

  const HandleLocation = () => {
    dispatch({
      type: SET_LOCATION_TRUE,
    });
  };

  const HandleLocationFalse = () => {
    dispatch({
      type: SET_LOCATION_FALSE,
    });
  };

  const HandleDetailLocation = (params) => {
    dispatch({
      type: SET_DETAIL_LOCATION,
      payload: params,
    });
  };

  const HandleCart = (params) => {
    dispatch({
      type: SET_CART,
      payload: {
        quantity: 1,
        price: Number(params.price),
      },
    });
  };

  return (
    <DataContext.Provider
      value={{
        dateIndex: resState.dateIndex,
        dateTime: resState.dateTime,
        eatTime: resState.eatTime,
        location: resState.location,
        locationItem: resState.locationItem,
        cart: resState.cart,
        cartItem: resState.cartItem,
        HandleDate,
        HandleEatTime,
        HandleLocation,
        HandleLocationFalse,
        HandleDetailLocation,
        HandleCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default Datas;
