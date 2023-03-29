import React, { Component } from "react";
import "./Countries.css";

class Countries extends Component {
  state = {
    countries: [],
    isActive: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/countries")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ countries: res });
      });
  }

  changeIsActive = (name) => {
    if (name === this.state.isActive) {
      this.setState({ isActive: false });
      return;
    }
    this.setState({ isActive: name });
  };

  render() {
    return (
      <div className="box">
        {this.state.countries?.map((country) => {
          return (
            <div key={country.name} className="content">
              <div className="row">
                <p>{country.name}</p>
                <span
                  onClick={() => this.changeIsActive(country.name)}
                  className="plus_minus_btn"
                >
                  {this.state.isActive === country.name ? "-" : "+"}
                </span>
              </div>
              <div
                className={
                  this.state.isActive === country.name ? "capital_box" : ""
                }
              >
                {this.state.isActive === country.name && (
                  <p className="capital_txt">{country.capital}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Countries;
