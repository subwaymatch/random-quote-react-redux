import { connect } from "react-redux";
import QuoteDisplay from "../components/QuoteDisplay";

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(
  mapStateToProps,
  null
)(QuoteDisplay);
