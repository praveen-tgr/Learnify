import React from 'react';


const About = () => {
  return (
    <section className="about" id='about'>
      <h2>About Learnify</h2>
      <p>
        Learnify is your trusted online learning platform designed to make education accessible, engaging, and effective. Whether you're a beginner or an expert, we have a course tailored just for you.
      </p>
      <div className="about-features">
        <div className="feature-card">
          <h3>Quality Content</h3>
          <p>Curated by industry experts to ensure you learn the best practices and latest trends.</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Learning</h3>
          <p>Learn at your own pace, anytime, anywhere with lifetime course access.</p>
        </div>
        <div className="feature-card">
          <h3>Certified Courses</h3>
          <p>Get recognized certificates upon course completion to boost your career prospects.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
