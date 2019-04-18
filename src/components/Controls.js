import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div id="quote-controls">
        <div id="new-quote" className="btn" onClick={this.props.getRandomQuote}>
          <i className="icon ion-md-refresh" />
          <ion-icon name="heart" />
          <span>New Quote</span>
        </div>
        <div id="tweet-quote" className="btn">
          <i className="icon ion-logo-twitter" />
          <a href={this.props.tweetURL}>Tweet Quote</a>
        </div>
      </div>
    );
  }
}

export default Controls;
