import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { Component } from "react";
import { setUserNameAction } from "../actions";

const mapStateToProps = (state) => ({
  productsLength: state.cart.jobs.length,
  userName: state.user.firstName,
});

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => {
    dispatch(setUserNameAction(name));
  },
});

class JobIndicator extends Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <div className="ml-auto mt-2">
        {this.props.userName ? (
          <>
            <span className="mr-2">Welcome {this.props.userName}!</span>
            <Button
              color="primary"
              onClick={() => this.props.history.push("/favourite")}
            >
              
              <FaShoppingCart />
              <span className="ml-2">{this.props.productsLength}</span>
            </Button>

          </>
        ) : (
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.inputValue}
            onChange={(e) =>
              this.setState({ inputValue: e.currentTarget.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("you just pressed enter");
                // now we're going to dispatch my action
                this.props.setUserName(this.state.inputValue);
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobIndicator));
