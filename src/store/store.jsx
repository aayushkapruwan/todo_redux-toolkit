import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../slices/todoslice/todoslice";
export const store = configureStore({
  reducer:todoreducer
});
