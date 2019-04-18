import {
  FETCH_QUOTE_BEGIN,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from "../actions/quoteActions";

const initialQuote =
  "<p>People with tiny glasses and costly shoes can always find a couple of hours to explain how you did it all wrong.</p>";
const initialState = {
  isLoading: false,
  text: initialQuote,
  author: "Merlin Mann",
  tweetURL:
    "http://twitter.com/intent/tweet?text=" + encodeURIComponent(initialQuote)
};

function randomQuoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE_BEGIN:
      console.log(FETCH_QUOTE_BEGIN);
      return state;
    case FETCH_QUOTE_SUCCESS:
      console.log(FETCH_QUOTE_SUCCESS);
      return Object.assign({}, state, {
        text: action.payload.quote.content,
        author: action.payload.quote.title,
        tweetURL:
          "https://twitter.com/intent/tweet?text=" +
          encodeURIComponent(action.payload.quote.content)
      });
    case FETCH_QUOTE_FAILURE:
      console.log(FETCH_QUOTE_FAILURE);
      return state;
    default:
      return state;
  }
}

export default randomQuoteReducer;
