export const FETCH_QUOTE_BEGIN = "FETCH_QUOTE_BEGIN";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchQuote() {
  console.log("fetchQuote()");

  return dispatch => {
    const url =
      "https://cors.io/?https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    dispatch(fetchQuoteBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchQuoteSuccess(json[0]));
        return json;
      })
      .catch(error => dispatch(fetchQuoteFailure(error)));
  };
}

export const fetchQuoteBegin = () => ({
  type: FETCH_QUOTE_BEGIN
});

export const fetchQuoteSuccess = quote => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: { quote }
});

export const fetchQuoteFailure = error => ({
  type: FETCH_QUOTE_FAILURE,
  payload: { error }
});
