import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import "./Contact.css";

function Contact() {


  const contactInfo = [
    {
      icon: "bi-envelope-fill",
      title: "Email Us",
      content: "info@coursehub.com",
      link: "mailto:info@coursehub.com",
    },
    {
      icon: "bi-telephone-fill",
      title: "Call Us",
      content: "9867453321",
      link: "tel:9867453321",
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Visit Us",
      content: "Kochi, India",
      link: "#",
    },
    {
      icon: "bi-clock-fill",
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1 className="contact-hero-title">Get in Touch</h1>
              <p className="contact-hero-subtitle">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info-section">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Fill out the form or reach out to us through any of these
                channels.
              </p>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="contact-info-card mb-3">
                    <Card.Body>
                      <div className="contact-info-item">
                        <div className="contact-info-icon">
                          <i className={`bi ${info.icon}`}></i>
                        </div>
                        <div className="contact-info-content">
                          <h6>{info.title}</h6>
                          <a href={info.link} className="contact-info-link">
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <div className="social-section mt-4">
                <h6 className="social-title">Follow Us</h6>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" aria-label="Twitter" className="social-icon">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" aria-label="Instagram" className="social-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <h3 className="form-title mb-4">Send us a Message</h3>

                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="submit-button"
                  >
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
