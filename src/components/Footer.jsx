import { useState, React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import logo from "../images/uniconnect_t.png";

const Footer = () => {
  const [input, setInput] = useState(null);

  return (
    <div
      className="footer_container"
      style={{
        background:
          "linear-gradient(45deg, rgba(245,152,59,0.6) 13%, rgba(245,121,59,0.5) 100%)",
        color: "black",
      }}
    >
      <Container
        style={{
          alignItem: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 25% 5% 25%",
        }}
      >
        <h4>JOIN OUR EMAIL LIST</h4>
        <Form
          style={{
            display: "flex",
          }}
        >
          <Form.Control
            placeholder="Subscribe for Updates..."
            className="me-2 "
            aria-label="Search"
            value={input}
            style={{
              flex: 1,
              background: "rgba(245,121,59,0.6)",
              width: "50%",
              justifyContent: "center",
              border: "none",
            }}
          />
          <Button
            variant="contained"
            style={{
              background: "#f5793b",
              transition: "0.4s",
              border: "none",
              boxShadow: "none",
            }}
          >
            Subscribe
          </Button>
        </Form>
      </Container>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div className="footer_logo_container">
              <img src={logo} width={200} height={70} alt="logo" />
            </div>
          </Col>
          <Col md={3} xs={4}>
            <h5 className="about_us_heading">Pages</h5>
            <ul className="navlinks" style={{ lineHeight: 0.9 }}>
              <li className="navlink">
                <a href="#/">Home</a>
              </li>
              <li className="navlink">
                <a href="#/">Services</a>
              </li>
              <li className="navlink">
                <a href="#/">Items</a>
              </li>
              <li className="navlink">
                <a href="#/">My Ads</a>
              </li>
              <li className="navlink">
                <a href="#/">Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="nav_li">
                <p className="navlink">+91-912-989-8796</p>
              </li>
              <li className="nav_li">
                <p className="navlink">
                  We are your friends who want to help you connecting with the
                  seniors.
                </p>
              </li>
              <li className="nav_li">
                <p className="navlink">company@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Divider light />
      <div
        style={{
          margin: "20px 0 0 0 ",
          textAlign: "center",
        }}
      >
        @UniConnect 2022 | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
