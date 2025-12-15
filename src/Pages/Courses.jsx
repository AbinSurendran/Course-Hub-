// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
// import './Courses.css';

// function Courses() {
//   const [selectedCategory, setSelectedCategory] = useState('all');
  
//   const categories = [
//     { id: 'all', name: 'All Courses', icon: '📚' },
//     { id: 'web', name: 'Web Development', icon: '🌐' },
//     { id: 'design', name: 'UI/UX Design', icon: '🎨' },
//     { id: 'business', name: 'Business', icon: '💼' },
//     { id: 'marketing', name: 'Marketing', icon: '📈' },
//     { id: 'data', name: 'Data Science', icon: '📊' },
//     { id: 'mobile', name: 'Mobile Development', icon: '📱' }
//   ];

//   const allCourses = [
//     {
//       id: 1,
//       title: 'Complete Web Development Bootcamp',
//       instructor: 'John Doe',
//       price: '$99',
//       originalPrice: '$199',
//       rating: 4.8,
//       students: 12500,
//       duration: '40 hours',
//       category: 'web',
//       image: '🌐',
//       level: 'Beginner'
//     },
//     {
//       id: 2,
//       title: 'UI/UX Design Masterclass',
//       instructor: 'Jane Smith',
//       price: '$79',
//       originalPrice: '$149',
//       rating: 4.9,
//       students: 8900,
//       duration: '35 hours',
//       category: 'design',
//       image: '🎨',
//       level: 'Intermediate'
//     },
//     {
//       id: 3,
//       title: 'Digital Marketing Pro',
//       instructor: 'Mike Johnson',
//       price: '$89',
//       originalPrice: '$179',
//       rating: 4.7,
//       students: 11200,
//       duration: '30 hours',
//       category: 'marketing',
//       image: '📈',
//       level: 'Beginner'
//     },
//     {
//       id: 4,
//       title: 'Python for Data Science',
//       instructor: 'Sarah Wilson',
//       price: '$109',
//       originalPrice: '$219',
//       rating: 4.9,
//       students: 15600,
//       duration: '45 hours',
//       category: 'data',
//       image: '🐍',
//       level: 'Intermediate'
//     },
//     {
//       id: 5,
//       title: 'React Native Mobile App Development',
//       instructor: 'David Brown',
//       price: '$94',
//       originalPrice: '$189',
//       rating: 4.8,
//       students: 9800,
//       duration: '38 hours',
//       category: 'mobile',
//       image: '📱',
//       level: 'Advanced'
//     },
//     {
//       id: 6,
//       title: 'Business Strategy & Leadership',
//       instructor: 'Emily Davis',
//       price: '$84',
//       originalPrice: '$169',
//       rating: 4.6,
//       students: 6700,
//       duration: '32 hours',
//       category: 'business',
//       image: '💼',
//       level: 'Intermediate'
//     },
//     {
//       id: 7,
//       title: 'Advanced JavaScript & ES6+',
//       instructor: 'Chris Taylor',
//       price: '$74',
//       originalPrice: '$149',
//       rating: 4.9,
//       students: 13400,
//       duration: '28 hours',
//       category: 'web',
//       image: '⚡',
//       level: 'Advanced'
//     },
//     {
//       id: 8,
//       title: 'Figma Design Fundamentals',
//       instructor: 'Lisa Anderson',
//       price: '$69',
//       originalPrice: '$139',
//       rating: 4.7,
//       students: 7800,
//       duration: '25 hours',
//       category: 'design',
//       image: '🎨',
//       level: 'Beginner'
//     }
//   ];

//   const filteredCourses = selectedCategory === 'all' 
//     ? allCourses 
//     : allCourses.filter(course => course.category === selectedCategory);

//   const getLevelBadgeVariant = (level) => {
//     switch(level) {
//       case 'Beginner': return 'success';
//       case 'Intermediate': return 'warning';
//       case 'Advanced': return 'danger';
//       default: return 'secondary';
//     }
//   };

//   return (
//     <main className="courses-page">
//       <div className="courses-hero">
//         <Container>
//           <Row>
//             <Col className="text-center py-5">
//               <h1 className="courses-hero-title">Explore Our Courses</h1>
//               <p className="courses-hero-subtitle">
//                 Discover thousands of courses from expert instructors
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <Container className="py-5">
//         <Row>
//           <Col lg={3} className="mb-4">
//             <Card className="filter-card">
//               <Card.Body>
//                 <h5 className="filter-title">Categories</h5>
//                 <div className="category-list">
//                   {categories.map(category => (
//                     <div
//                       key={category.id}
//                       className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
//                       onClick={() => setSelectedCategory(category.id)}
//                     >
//                       <span className="category-icon">{category.icon}</span>
//                       <span className="category-name">{category.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col lg={9}>
//             <Row className="mb-4">
//               <Col md={8}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Search courses..."
//                   className="search-input"
//                 />
//               </Col>
//               <Col md={4}>
//                 <Form.Select>
//                   <option>Sort by: Popularity</option>
//                   <option>Sort by: Price Low to High</option>
//                   <option>Sort by: Price High to Low</option>
//                   <option>Sort by: Rating</option>
//                 </Form.Select>
//               </Col>
//             </Row>

//             <Row>
//               {filteredCourses.length > 0 ? (
//                 filteredCourses.map(course => (
//                   <Col md={6} lg={4} key={course.id} className="mb-4">
//                     <Card className="course-card-full h-100">
//                       <div className="course-image-wrapper">
//                         <div className="course-image-large">{course.image}</div>
//                         <Badge 
//                           bg={getLevelBadgeVariant(course.level)} 
//                           className="course-level-badge"
//                         >
//                           {course.level}
//                         </Badge>
//                       </div>
//                       <Card.Body>
//                         <div className="course-rating mb-2">
//                           <span className="text-warning">
//                             {'★'.repeat(Math.floor(course.rating))}
//                           </span>
//                           <span className="ms-2 text-muted small">
//                             {course.rating} ({course.students.toLocaleString()}+)
//                           </span>
//                         </div>
//                         <Card.Title className="course-title-full">{course.title}</Card.Title>
//                         <Card.Text className="course-instructor-full text-muted mb-2">
//                           by {course.instructor}
//                         </Card.Text>
//                         <div className="course-meta mb-3">
//                           <span className="course-duration">
//                             <i className="bi bi-clock me-1"></i>
//                             {course.duration}
//                           </span>
//                         </div>
//                         <div className="d-flex justify-content-between align-items-center">
//                           <div>
//                             <span className="course-price-full">{course.price}</span>
//                             {course.originalPrice && (
//                               <span className="course-original-price ms-2">{course.originalPrice}</span>
//                             )}
//                           </div>
//                           <Button variant="primary" size="sm">
//                             Enroll
//                           </Button>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))
//               ) : (
//                 <Col>
//                   <div className="text-center py-5">
//                     <p className="text-muted">No courses found in this category.</p>
//                   </div>
//                 </Col>
//               )}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </main>
//   );
// }

// export default Courses;




import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './Courses.css';

function Courses() {

 const allCourses = [
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
  {
    id: 5,
    title: 'Java Programming & Spring Boot',
    instructor: 'Vishal ',
    price: '₹6,999',
    originalPrice: '₹13,999',
    rating: 4.8,
    students: 9700,
    duration: '40 hours',
    image: '☕',
    level: 'Intermediate'
  },
  {
    id: 6,
    title: 'DevOps with Docker & Kubernetes',
    instructor: 'Arun',
    price: '₹9,999',
    originalPrice: '₹18,999',
    rating: 4.7,
    students: 8600,
    duration: '36 hours',
    image: '🚀',
    level: 'Advanced'
  },
  {
    id: 7,
    title: 'Cyber Security & Ethical Hacking',
    instructor: 'Kiran ',
    price: '₹7,499',
    originalPrice: '₹14,499',
    rating: 4.6,
    students: 7900,
    duration: '34 hours',
    image: '🔐',
    level: 'Advanced'
  },
  {
    id: 8,
    title: 'Mobile App Development with React Native',
    instructor: 'Neha ',
    price: '₹6,299',
    originalPrice: '₹12,499',
    rating: 4.8,
    students: 10400,
    duration: '38 hours',
    image: '📱',
    level: 'Intermediate'
  }
];




  return (
    <main className="courses-page">
      <div className="courses-hero">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1 className="courses-hero-title">Explore Our Courses</h1>
              <p className="courses-hero-subtitle">
                Learn from industry experts and upgrade your skills
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          {allCourses.map(course => (
            <Col key={course.id} lg={3} md={6} sm={12} className="mb-4">
              <Card className="course-card-full h-100">
                <div className="course-image-wrapper">
                  <div className="course-image-large"></div>
                 
                </div>

                <Card.Body className="d-flex flex-column">
                  <div>
                    

                    <Card.Title className="course-title-full">
                      {course.title}
                    </Card.Title>

                    <Card.Text className="course-instructor-full text-muted mb-2">
                      by {course.instructor}
                    </Card.Text>

                    <div className="course-meta mb-3">
                      <span className="course-duration">
                        <i className="bi bi-clock me-1"></i>
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Footer aligned */}
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <span className="course-price-full">{course.price}</span>
                      <span className="course-original-price ms-2">
                        {course.originalPrice}
                      </span>
                    </div>
                    <Button size="sm">Enroll</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Courses;
