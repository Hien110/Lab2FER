import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { Carousel } from "react-bootstrap";
import image1 from "./image/pizza1.jpg";
import image2 from "./image/pizza2.jpg";
import image3 from "./image/pizza3.jpg";
import image4 from "./image/pizza4.jpg";
import image5 from "./image/pizza5.jpg";

import { Card } from "react-bootstrap";
import menu1 from "./image/menu1.jpg";
import menu2 from "./image/menu2.jpg";
import menu3 from "./image/menu3.jpg";
import menu4 from "./image/menu4.jpg";

import { SearchOutlined } from '@ant-design/icons';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <div class="bg-dark text-white">
      <Navbar className="container text-white" >
        <Navbar.Brand href="#" className="text-white">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">About us</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="bg-danger border-0" type="submit">
            <SearchOutlined />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Carousel id="carouselExample">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              if you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              if you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              if you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              if you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Third slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              if you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container p-5">
        <h1 className="text-left p-3">Our Menu</h1>
        <div className="d-flex">
          <Card style={{ width: "18rem" }} className="mx-3">
            <Card.Img variant="top" src={menu1} />
            <Card.Body>
              <Card.Title>Margenrita Pizza</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">
                Buy
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-3">
            <Card.Img variant="top" src={menu2} />
            <Card.Body>
              <Card.Title>Mushroom Pizza</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">
                Buy
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-3">
            <Card.Img variant="top" src={menu3} />
            <Card.Body>
              <Card.Title>Hawaiian Pizza</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">
                Buy
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-3">
            <Card.Img variant="top" src={menu4} />
            <Card.Body>
              <Card.Title>Pesto Pizza</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container p-5">
        <h2 className="text-center mt-3 mb-4">Book your table</h2>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formServer">
                <Form.Label>Select a Server</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Server 1</option>
                  <option>Server 2</option>
                  <option>Server 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formTextArea">
                <Form.Label>Additional Requests</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter any additional requests"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="warning" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
      </div>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
