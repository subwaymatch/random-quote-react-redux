import React, { Component } from "react";
import PropTypes from "prop-types";

class QuoteDisplay extends Component {
  render() {
    const { text, author } = this.props.quote;

    return (
      <div id="quote-box">
        <div id="text" dangerouslySetInnerHTML={{ __html: text }} />
        <p id="author">{author}</p>
      </div>
    );
  }
}

QuoteDisplay.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};

export default QuoteDisplay;
