import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    // componentDidMount() {
    //   axios.interceptor.request.use((req) => {
    //     this.setState({ error: null });
    //     return req;
    //   });
    //   axios.interceptor.response.use(
    //     (res) => res,
    //     (error) => {
    //       this.setState({ error: error });
    //     }
    //   );
    // }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render(props) {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
