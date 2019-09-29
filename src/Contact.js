import React from "react";
import "./Contact.css";

function postDataForm(data, callback) {
  return fetch("/api/form?API_KEY=zx3nkd55PascweD", {
    method: "POST",
    body: data
  })
    .response.json()
    .then(callback);
}

export default class Contact extends React.Component {
  componentWillMount() {
    this.setState({ isSubmited: false });
  }

  handleSubmit = e => {
    postDataForm(new FormData(e.target), () => {
      this.setState({ isSubmited: true });
    });
  };

  render() {
    // console.log(this.state);

    return (
      <div className="container">
        <img
          className="logo"
          src="https://www.netguru.com/hubfs/images/landing_pages/og72x.png"
        />
        <div className="header">Contact</div>
        <div className="title">Use form below to contact us:</div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Your name" />
          <br />
          <input name="email" placeholder="Your email" />
          <br />
          <textarea name="message" placeholder="Your message" />
          <br />
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
        {this.state.isSubmited && (
          <div>Thanks! Your message has been submitted.</div>
        )}
      </div>
    );
  }
}
