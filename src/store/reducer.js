import TYPES from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_TOTAL_PAGES: // How match pages in your book
      return {
        ...state,
        bookPages: payload.bookPages,
      };
    case TYPES.SET_READING_SPEED: // Speed of reading one page (words in 1min)
      return {
        ...state,
        readingSpeed: payload.readingSpeed,
      };
    case TYPES.SET_HOUR_TO_BOOK: //  How match hours you need to reading your book
      return {
        ...state,
        hoursToReadBook: payload.hoursToReadBook,
      };
    case TYPES.SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default reducer;
