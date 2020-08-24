import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import styles from "./ContactData.css";
import axios from "../../../axios-orders";

export class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      PIN: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    // alert("continue");
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Rehaan Quazi",
        address: {
          street: "Old Street",
          zipcode: "756100",
          country: "India",
        },
        email: "srehaan65@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <input className="Input" type="text" name="PIN" placeholder="PIN" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
