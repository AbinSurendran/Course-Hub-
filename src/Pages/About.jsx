import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

function About() {
  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "500+", label: "Expert Instructors" },
    { number: "1,000+", label: "Online Courses" },
    { number: "150+", label: "Countries" },
  ];

  return (
    <main className="about-page">
      <div className="about-hero">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1 className="about-hero-title">About CourseHub</h1>
              <p className="about-hero-subtitle">
                Empowering learners worldwide to achieve their goals through
                quality education
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                At CourseHub, we believe that education should be accessible,
                engaging, and transformative. Our mission is to democratize
                learning by providing high-quality courses from expert
                instructors to learners worldwide.
              </p>
              <p className="section-text">
                We're committed to creating an inclusive learning environment
                where anyone, regardless of their background or location, can
                develop new skills, advance their career, and achieve their
                personal and professional goals.
              </p>
              <div className="mission-values mt-4">
                <div className="value-item">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Accessible Education for Everyone</span>
                </div>
                <div className="value-item">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Quality Content from Experts</span>
                </div>
                <div className="value-item">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Lifetime Learning Support</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mission-image">
                <div className="mission-illustration">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section py-5 bg-light">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index} className="text-center mb-4">
                <div className="stat-card-about">
                  <h2 className="stat-number-about">{stat.number}</h2>
                  <p className="stat-label-about">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="cta-title-about mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="cta-description-about mb-4">
                Join thousands of students already learning and growing with
                CourseHub
              </p>
              <div className="cta-buttons">
                <a href="/signup" className="btn btn-light btn-lg me-3">
                  Get Started Free
                </a>
                <a href="/courses" className="btn btn-outline-light btn-lg">
                  Browse Courses
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default About;
