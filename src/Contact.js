import React from "react";

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
    console.log(this.state);

    return (
      <div>
        <img src="https://www.netguru.com/hubfs/images/landing_pages/og72x.png" />
        <div>Contact</div>
        <div>Use form below to contact us:</div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" />
          <br />
          <input name="surname" placeholder="Surname" />
          <br />
          <input name="title" placeholder="Title" />
          <br />
          <button type="submit">Send</button>
        </form>
        {this.state.isSubmited && (
          <div>Thanks! Your message has been submitted.</div>
        )}
      </div>
    );
  }
}
