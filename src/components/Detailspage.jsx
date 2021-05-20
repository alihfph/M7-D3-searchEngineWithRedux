import { Component } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCartActionWithThunk } from "../actions/index.js";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobDetails) => {
    dispatch(addToCartActionWithThunk(jobDetails)); // dispatch({ type: "ADD_TO_CART", payload: jobDetails})
  },
});

class Detailspage extends Component {
  state = {
    jobDetails: null,
  };

  componentDidMount() {
    this.getJobDetails();
  }

  getJobDetails = async () => {
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`
    );
    const jobDetails = await response.json();
    console.log(jobDetails);

    this.setState({ jobDetails });
  };

  render() {
    const { jobDetails } = this.state;
    return (
      <Container>
        <Row>
          {jobDetails && (
            <>
              <Col xs={12} className="d-flex align-items-center my-4">
                <Image
                  className="header-img me-0"
                  src={this.state.jobDetails.company_logo}
                />
              </Col>
              <Col xs={12} className=" ">
                <h1>{this.state.jobDetails.company}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.jobDetails.description,
                  }}
                />

                <h5>How to apply:</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.jobDetails.how_to_apply,
                  }}
                />
              </Col>
            </>
          )}
          {this.props.user.firstName ? (
            <Button
              color="primary"
              onClick={() => this.props.addToCart(this.state.jobDetails)}
            >
              Save this Job
            </Button>
          ) : (
            <span>You need to login for adding this to the cart</span>
          )}
        </Row>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detailspage);
