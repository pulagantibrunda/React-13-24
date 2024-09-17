import React from 'react';
import './Cards.css'; // Importing the CSS file for styling

const Cards = ({ name, age, subjects = [], courses = [], experience }) => {
  return (
    <div className='trainerInfo'>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Subjects:</strong> {subjects.length > 0 ? subjects.join(', ') : 'No subjects available'}</p>
      <p><strong>Courses:</strong> {courses.length > 0 ? courses.join(', ') : 'No courses available'}</p>
      <p><strong>Experience:</strong> {experience} years</p>
    </div>
  );
}

export default Cards;
