import React from "react";
import { Container, Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
    

      {/* Hero Section */}
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between my-5">
        <div className="text-center text-md-start">
          <h1 className="fw-bold">Welcome To Code Companions!</h1>
          <p className="text-danger fw-semibold">Where Ideas Begin.</p>
          <p className="text-muted">
            Get in touch with awesome developers with just one click.
            <br />
            Work on innovative ideas, collaborate, and meet new developers across the globe.
          </p>
        </div>
        <img 
          src="/teamforhack-mainpage.png" 
          alt="CODE COMPANIONS Main Page"
          className="img-fluid"
        />
      </Container>
    </>
  );
};

export default LandingPage;
