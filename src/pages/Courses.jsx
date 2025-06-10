import React from 'react';
import reactImg from '../assets/react.png'
import uiuxImg from '../assets/uiux.jpg'
import courseImg from '../assets/course.jpg';
import pyImg from '../assets/py.jpg'

const Courses = () => {
  const courseList = [
    { id: 1, title: 'React Basics', desc: 'Learn the fundamentals of React.js.', img: reactImg },
    { id: 2, title: 'JavaScript Mastery', desc: 'Deep dive into JS concepts.', img: courseImg },
    { id: 3, title: 'UI/UX Design', desc: 'Design stunning user interfaces.', img: uiuxImg },
    { id: 4, title: 'Python for Beginners', desc: 'Start your Python journey.', img: pyImg },
  ];

  return (
    <section className="courses" id='courses'>
      <h2>Our Popular Courses</h2>
      <div className="course-grid">
        {courseList.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.img} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
