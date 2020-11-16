import { createAction } from "redux-actions";
import TYPES from "./types";

export const setTotalPages = createAction(TYPES.SET_TOTAL_PAGES);
export const setReadingSpeed = createAction(TYPES.SET_READING_SPEED);
export const setHourToBook = createAction(TYPES.SET_HOUR_TO_BOOK);
export const showModal = createAction(TYPES.SHOW_MODAL);
