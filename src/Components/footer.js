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

const Footer = () => {
  return (
    <>
      <footer class="text-center text-lg-start text-dark bg-light">
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">FOOTER CONTENT</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae modi cum ipsam ad, illo possimus laborum ut
                  reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                  Reiciendis assumenda iusto sapiente inventore animi?
                </p>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <hr class="mb-4" />
          <section class="">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">Register for free</span>
              <button type="button" class="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
          <hr class="mb-4" />
          <section class="mb-4 text-center">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div class="text-center p-3 bg-light">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
