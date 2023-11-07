import Footer from "../../Components/footer";
import NavBar from "../../Components/navbar";
import "../../Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Col,
  Row,
  Button,
  Form,
  Modal,
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faThumbsDown,
  faHeart,
  faCalendar,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="cover d-md-flex d-sm-block justify-content-center align-items-center mt-3">
        <Row className="col-10">
          <Col className="col-6">
            <img
              src="/images/cover.jpg"
              alt="cover"
              width="100%"
              height="100%"
            />
          </Col>
          <Col className="col-6 p-4">
            <p>
              <h2>Go places. Where@ events are here, Will take you there.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eveniet in atque saepe incidunt pariatur.
              </p>
              <button className="btn btn-warning">Take me places</button>
            </p>
          </Col>
        </Row>
      </div>
      <div className="places container-fluid">
        <h4 className="text-center p-3">Popular events</h4>
        <div className="d-flex justify-content-center align-items-center">
          <Row className="col-md-10 row align-items-start">
            <Col className="mb-3">
              <Card style={{ width: "18rem" }} className="border-0 rounded-0">
                <Card.Img
                  variant="top"
                  src="/images/victoria-falls-national.jpg"
                  width="100%"
                  height="200px"
                  className="rounded-0"
                />
                <Card.Body>
                  <Card.Title>
                    Victoria Falls -
                    <span className="text-warning">
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                    </span>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti libero molestias, laboriosam officia iste
                    recusandae!
                    <br />
                    <div class="input-group pt-3">
                      <span>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        Going 21
                      </span>
                      <span className="ml-5">
                        <FontAwesomeIcon icon={faThumbsDown} />
                        Cancelled 9
                      </span>
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                      Likes 101
                    </span>
                  </Card.Text>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faCalendar} />
                    Explore Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
              <Card style={{ width: "18rem" }} className="border-0 rounded-0">
                <Card.Img
                  variant="top"
                  src="/images/mexico.jpg"
                  width="100%"
                  height="200px"
                  className="rounded-0"
                />
                <Card.Body>
                  <Card.Title>
                    Mexico State -
                    <span className="text-warning">
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                    </span>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti libero molestias, laboriosam officia iste
                    recusandae!
                    <br />
                    <div class="input-group pt-3">
                      <span>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        Going 13
                      </span>
                      <span className="ml-5">
                        <FontAwesomeIcon icon={faThumbsDown} />
                        Cancelled 2
                      </span>
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                      Likes 15
                    </span>
                  </Card.Text>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faCalendar} />
                    Explore Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
              <Card style={{ width: "18rem" }} className="border-0 rounded-0">
                <Card.Img
                  variant="top"
                  src="/images/hawaii.jpg"
                  width="100%"
                  height="200px"
                  className="rounded-0"
                />
                <Card.Body>
                  <Card.Title>
                    Hawaii -
                    <span className="text-warning">
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                      <small>
                        <FontAwesomeIcon icon={faStar} />
                      </small>
                    </span>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti libero molestias, laboriosam officia iste
                    recusandae!
                    <br />
                    <div class="input-group pt-3">
                      <span>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        Going 220
                      </span>
                      <span className="ml-5">
                        <FontAwesomeIcon icon={faThumbsDown} />
                        Cancelled 11
                      </span>
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                      Likes 270
                    </span>
                  </Card.Text>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faCalendar} />
                    Explore Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
