import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCartAction } from "../actions";

const mapStateToProps = (state) => ({
  booksInTheCart: state.cart.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => dispatch(removeFromCartAction(index)),
});

const FavouriteJob = ({ booksInTheCart, removeFromCart }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {booksInTheCart.map((jobDetails, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromCart(i)}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={jobDetails.imageUrl}
              alt="book selected"
            />
            {jobDetails.title}
          </li>
        ))}
      </ul>
    </Col>
    {/* <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {booksInTheCart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row> */}
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteJob);
