import React from "react";
import './Cards.css';

// Child Component
const CourseCard = (props) => {
  return (
    <div className="course-card">
      <h2>{props.title}</h2>
      <hr/>
      <p>{props.description}</p>
      <b>Reviews: {props.reviews}</b>
      <p>Ratings:{props.ratings}</p>
    </div>
  );
};

// Parent Component
const Course = () => {
  const courses = [
    {
      title: "Angular Development Course",
      description: "Angular is popular for making dynamic applications and its information official and reliance infusion includes all together..",
      reviews: 247,
      rating: 6.0
    },
    {
      title: "React Development Course",
      description: "Achievers IT react js certification Course in Banglore we teach you detailed explaination of the JSX and Unidirectional components..",
      reviews: 392,
      rating: 4.0
    },
    {
        title:"Mean Stack development Course",
        description:"Mean stack front to back.In this course we will build an in depth full stack social network application using angular, express... ",
        reviews: 126,
        rating: 4.9

    },
    {
        title:"Mern stack development Course",
        description:"Mern stack front to back.In this course we will build an in depth full stack social network application using Node.js, express..",
        reviews:192,
        rating:4.8
    },
    {
        title:"web Development Course",
        description:"with Achievers IT UI development Course in bangalore, you will able to master the concepts such as CSS3, HTML...",
        reviews:312,
        rating:5.5
    },
    {title:"Digital Marketing Course ",
        description:"The feature of digital marketing is promising, and its scope in the upcoming feature is that it may replace all other standard forms..",
        reviews:178,
        rating:4.7

    },
    {
        title:"React Development Course ",
        description:"Full stack development is defined as the development of the both the frontend  and  backend side of a wed Appilcation..",
        reviews:175,
        rating:4.5
    },
    {
        title:"Ionic Development Course",
        description:"ionic 4 and ionic 5 that you can immediately implement to bilud hig quality apps. Our Course covers a wide variety of topics..",
        reviews:179,
        rating:4.6
    },
    {
        title:"Java Full Stack Course",
        description:"ionic 4 and ionic 5 that you can immediately implement to bilud hig quality apps. Our Course covers a wide variety of topics..",
        reviews:109,
        rating:4.6
    },

    // Add more courses as needed
  ];

  return (
    <div>
      
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            reviews={course.reviews}
            ratings={course.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;