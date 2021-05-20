import { Container, Row, Button, Col } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { ImHeart } from "react-icons/im";
import { connect } from "react-redux";
import { Component } from "react";
import { Link } from "react-router-dom";
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
      <Container>
        <Row className="mx-5 mt-5">
          <Col>
            {this.props.userName ? (
              <>
                <span className="mx-3">Welcome {this.props.userName}..!</span>
                <Link to="/favourites">
                  <Button
                    color="primary"
                    // onClick={() => this.props.history.push("/favourite")}
                  >
                    <ImHeart />
                    <span className="ml-2">
                      {" "}
                      Your saved jobs {this.props.productsLength}
                    </span>
                  </Button>
                </Link>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobIndicator));
