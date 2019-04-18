import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";
import Controls from "../components/Controls";

const mapStateToProps = state => ({
  tweetURL: state.quote.tweetURL
});

const mapDispatchToProps = dispatch => ({
  getRandomQuote: () => dispatch(fetchQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
