// 중앙데이터 관리소(Store)를 설정하는 부분

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   counter: counter,
// });
// const store = createStore(rootReducer);

// TODO : Redux Toolkit
const store = configureStore({
  // 이 안에는 객체가 들어감. 리듀서! from counter.js
  reducer: {
    counter: counter,
  },
});
export default store;
