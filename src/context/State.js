import React, { useState, useReducer } from "react";

import dataReducer from "./reducer";
import DataContext from "./Context";

import { SET_DATE } from "./types";

const Datas = (props) => {
  const [initialState] = useState({
    dateIndex: 0,
    dateTime: null,
  });

  const [resState, dispatch] = useReducer(dataReducer, initialState);

  const HandleDate = (params) => {
    dispatch({
      type: SET_DATE,
      payload: {
        index: params.index,
        data: params.data,
      },
    });
  };

  return (
    <DataContext.Provider
      value={{
        dateIndex: resState.dateIndex,
        dateTime: resState.dateTime,
        HandleDate,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default Datas;
