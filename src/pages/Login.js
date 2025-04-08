import React from "react";
import { Button, Form, Card, Container } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login to Code Companions</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#" className="text-decoration-none">Forgot Password?</a>
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Login
            </Button>

            <div className="text-center mt-3">
              <p>or</p>
              <Button variant="danger" className="w-100">
                <i className="fab fa-google me-2"></i> Sign in with Google
              </Button>
            </div>

            <div className="text-center mt-3">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
