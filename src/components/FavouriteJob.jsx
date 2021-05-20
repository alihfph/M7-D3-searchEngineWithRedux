import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Row, Col, Image, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCartAction } from "../actions";

const mapStateToProps = (state) => ({
  booksInTheCart: state.cart.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => dispatch(removeFromCartAction(index)),
});

const FavouriteJob = ({ booksInTheCart, removeFromCart }) => (
  <Container>
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {booksInTheCart.map((jobDetails, i) => (
            <li key={i} className="my-4">
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>
                        {jobDetails.title} -{" "}
                        <span className="text-muted font-weight-light">
                          {jobDetails.company}
                        </span>
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {new Date(jobDetails.created_at).toLocaleDateString()}
                      </Card.Subtitle>

                      <Button size="sm" variant="success" className="mr-2">
                        {jobDetails.type}
                      </Button>
                      <Button size="sm" variant="primary">
                        {jobDetails.location}
                      </Button>
                      <div style={{ wordBreak: "break-all" }}>
                        <Card.Link href="#">{jobDetails.url} </Card.Link>
                        <Link
                          to={`/${jobDetails.id}`}
                          className="btn btn-primary"
                        >
                          More Deatils
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="d-none d-md-block"
                        height="40"
                        alt={jobDetails.company}
                        src={jobDetails.company_logo}
                      />
                      <Button
                        variant="danger"
                        className="mt-5"
                        height="20"
                        onClick={() => removeFromCart(i)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  {/* <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="secondary"
          >
            {open ? 'Hide Details' : 'Job Description'}
          </Button>
        </Card.Text> */}
                  {/* <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={r.description} />
            
          </div>
        </Collapse> */}
                </Card.Body>
              </Card>
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
  </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteJob);
