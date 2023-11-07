import "../../Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../Components/navbar";
import Footer from "../../Components/footer";
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
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const MoreDetails = () => {
  return (
    <>
      <NavBar />
      <div className="cover d-md-flex d-sm-block justify-content-center align-items-center mt-3 mb-3">
        <Row className="col-8">
          <Col className="col-5">
            <img
              src="/images/hawaii.jpg"
              alt="cover"
              width="100%"
              height="100%"
            />
          </Col>
          <Col className="col-5 p-4">
            <p>
              <h2>
                Modern Hawaaii Resort -
                <span className="text-warning h6">
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
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, reiciendis. Consectetur ex at ipsam, perferendis unde
                aperiam dolore suscipit voluptate facilis architecto excepturi
                eos tempore?
              </p>
              <br />
              <div class="input-group">
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
            </p>
            <button className="btn btn-warning">
              {" "}
              <FontAwesomeIcon icon={<FontAwesomeIcon icon={faHeart} />} />
              Book Now
            </button>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default MoreDetails;
