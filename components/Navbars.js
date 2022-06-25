import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "./../images/logo-white.png";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Navbar.module.css";

const Navbars = () => {
  return (
    <div>
      <div>
        <>
          <Navbar
            collapseOnSelect
            expand="lg"
            className="style.custom-navbar"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="#home">
                <img width="200" src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="justify-content-end">
                  <Nav.Link
                    className={styles.menulink}
                    style={{ paddingTop: "13px" }}
                    href="#home"
                  >
                    HOW TO BUY/SELL
                  </Nav.Link>
                  <Nav.Link
                    className={styles.menulink}
                    style={{ paddingTop: "13px" }}
                    href="#features"
                  >
                    TERMS & CONDITIONS
                  </Nav.Link>
                  <Nav.Link
                    className={styles.menulink}
                    style={{ paddingTop: "13px" }}
                    href="#pricing"
                  >
                    CONTACTS
                  </Nav.Link>
                  <Nav.Link href="#pricing">
                    <Button variant="outline-primary">LOGIN</Button>{" "}
                  </Nav.Link>
                  <Nav.Link href="#pricing">
                    <Button variant="outline-primary">REGISTER</Button>{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </div>
    </div>
  );
};

export default Navbars;
