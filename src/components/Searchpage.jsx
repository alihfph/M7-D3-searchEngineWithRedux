// import ReactMarkdown from "react-markdown";
import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getjobsAction } from "../actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: (value) => dispatch(getjobsAction(value)),
});

class Searchpage extends React.Component {
  state = {
    description: "",
    location: "",
    result: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount = async (e) => {
    this.props.getJobs(true);
  };

  handleSubmit = async (e) => {
    e.preventDefault()
    const { description, location } = this.state;
    this.props.getJobs({ description, location });
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { description, location } = this.state;

  //   const response = await fetch(
  //     `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
  //   );
  //   const result = await response.json();
  //   console.log(result);
  //   this.setState({
  //     result,
  //   });
  // };
  render() {
    console.log(this.props);

    return (
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={8} className="mx-auto">
            <h1>Search Jobs...</h1>
            <Form onSubmit={this.handleSubmit}>
              <div className="d-flex my-3">
                <Form.Control
                  name="description"
                  className="me-1"
                  type="search"
                  placeholder="Search jobs"
                  onChange={this.handleChange}
                />
                <Form.Control
                  name="location"
                  type="search"
                  placeholder="Location"
                  onChange={this.handleChange}
                />
              </div>
              <Form.Control type="submit" value="Submit" className="btn btn-primary" />
            </Form>

            {this.props.searchjobs.result.map((r) => (
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>
                        {r.title} -{" "}
                        <span className="text-muted font-weight-light">
                          {r.company}
                        </span>
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {new Date(r.created_at).toLocaleDateString()}
                      </Card.Subtitle>

                      <Button size="sm" variant="success" className="mr-2">
                        {r.type}
                      </Button>
                      <Button size="sm" variant="primary">
                        {r.location}
                      </Button>
                      <div style={{ wordBreak: "break-all" }}>
                        <Card.Link href="#">{r.url} </Card.Link>
                        <Link to={`/${r.id}`} className="btn btn-primary">
                          More Deatils
                        </Link>
                      </div>
                    </div>
                    <Image
                      className="d-none d-md-block"
                      height="50"
                      alt={r.company}
                      src={r.company_logo}
                    />
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
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);
