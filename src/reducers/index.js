import { combineReducers } from "redux";
import randomQuoteReducer from "./randomQuoteReducer";

const rootReducer = combineReducers({
  quote: randomQuoteReducer
});

export default rootReducer;
