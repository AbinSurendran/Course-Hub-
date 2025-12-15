import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  const featuredCourses = [
    {
    id: 1,
    title: 'Full Stack Web Development (MERN)',
    instructor: 'Abishek ',
    price: '₹7,999',
    originalPrice: '₹14,999',
    rating: 4.9,
    students: 18500,
    duration: '45 hours',
    image: '💻',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'React.js & Modern Frontend Development',
    instructor: 'Rahul ',
    price: '₹5,999',
    originalPrice: '₹11,999',
    rating: 4.8,
    students: 14200,
    duration: '32 hours',
    image: '⚛️',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Node.js & Express Backend Development',
    instructor: 'Sneha',
    price: '₹6,499',
    originalPrice: '₹12,999',
    rating: 4.7,
    students: 11800,
    duration: '30 hours',
    image: '🟢',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'Python for Data Science & AI',
    instructor: 'Arjun ',
    price: '₹8,499',
    originalPrice: '₹15,999',
    rating: 4.9,
    students: 20100,
    duration: '50 hours',
    image: '🐍',
    level: 'Beginner'
  },
 
  ]

  const stats = [
    { number: '50K+', label: 'Students Enrolled' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '1000+', label: 'Online Courses' },
    { number: '98%', label: 'Success Rate' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Learn Anything, Anytime, <span className="text-primary">Anywhere</span>
              </h1>
              <p className="hero-description">
                Discover thousands of courses from expert instructors. 
                Build new skills, advance your career, and achieve your learning goals 
                with our comprehensive online platform.
              </p>
              <div className="hero-buttons">
                <Button as={Link} to="/courses" size="lg" className="me-3 mb-3">
                  Explore Courses
                </Button>
                <Button as={Link} to="/signup" variant="outline-light" size="lg" className="mb-3">
                  Get Started Free
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <div className="hero-illustration">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index} className="text-center mb-4">
                <div className="stat-card">
                  <h2 className="stat-number">{stat.number}</h2>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Courses Section */}
      <section className="courses-section py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="section-title">Featured Courses</h2>
              <p className="section-subtitle">
                Explore our most popular courses designed by industry experts
              </p>
            </Col>
          </Row>
          <Row>
            {featuredCourses.map((course) => (
              <Col lg={3} md={6} key={course.id} className="mb-4">
                <Card className="course-card h-100">
                  <div className="course-image">{course.image}</div>
                  <Card.Body>
                    <div className="course-rating mb-2">
                      <span className="text-warning">
                        {'★'.repeat(Math.floor(course.rating))}
                      </span>
                      <span className="ms-2 text-muted small">
                        {course.rating} ({course.students}+)
                      </span>
                    </div>
                    <Card.Title className="course-title">{course.title}</Card.Title>
                    <Card.Text className="course-instructor text-muted">
                      by {course.instructor}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="course-price">{course.price}</span>
                      <Button variant="primary" size="sm">
                        Enroll Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button as={Link} to="/courses" variant="outline-primary" size="lg">
                View All Courses
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="section-title">Why Choose CourseHub?</h2>
              <p className="section-subtitle">
                Experience the best in online learning
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <h4>Expert Instructors</h4>
                <p className="text-muted">
                  Learn from industry professionals with years of real-world experience
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <h4>Lifetime Access</h4>
                <p className="text-muted">
                  Get lifetime access to all course materials and future updates
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4>Community Support</h4>
                <p className="text-muted">
                  Join a thriving community of learners and get help when you need it
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="cta-title mb-4">Ready to Start Learning?</h2>
              <p className="cta-description mb-4">
                Join thousands of students already learning on CourseHub
              </p>
              <Button as={Link} to="/signup" size="lg" variant="light">
                Sign Up for Free
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home



