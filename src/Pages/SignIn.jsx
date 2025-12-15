import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate successful login
    // In a real app, this would make an API call
    navigate('/courses');
  };

  return (
    <main className="auth-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="auth-card">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="bi bi-box-arrow-in-right auth-icon"></i>
                  <h2 className="auth-title">Welcome Back</h2>
                  <p className="auth-subtitle">Sign in to continue your learning journey</p>
                </div>

                {error && (
                  <Alert variant="danger" className="mb-3">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                    />
                    <Link to="#" className="auth-link">
                      Forgot password?
                    </Link>
                  </div>

                  <Button variant="primary" type="submit" className="w-100 mb-3 auth-button">
                    Sign In
                  </Button>
                </Form>

                <div className="text-center">
                  <p className="auth-footer-text">
                    Don't have an account?{' '}
                    <Link to="/signup" className="auth-link">
                      Sign Up
                    </Link>
                  </p>
                </div>

                <div className="divider my-4">
                  <span>Or sign in with</span>
                </div>

                <div className="social-buttons">
                  <Button variant="outline-primary" className="w-100 mb-2">
                    <i className="bi bi-google me-2"></i>
                    Continue with Google
                  </Button>
                  <Button variant="outline-dark" className="w-100">
                    <i className="bi bi-github me-2"></i>
                    Continue with GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default SignIn;

