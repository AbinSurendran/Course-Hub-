import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4">
            <h5 className="footer-brand">
              <i className="bi bi-mortarboard-fill me-2"></i>
              CourseHub
            </h5>
            <p className="footer-text">
              Empowering learners worldwide with high-quality courses. 
              Learn new skills, advance your career, and achieve your goals.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="footer-heading">Categories</h6>
            <ul className="footer-links">
              <li><a href="#web">Web Development</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#business">Business</a></li>
              <li><a href="#marketing">Marketing</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="footer-heading">Contact Info</h6>
            <ul className="footer-links footer-contact">
              <li>
                <i className="bi bi-envelope me-2"></i>
                info@coursehub.com
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>
                986673635622
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                Kochi, Kerala, India
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 border-top">
            <p className="footer-copyright">
             Developed by CourseHub.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

