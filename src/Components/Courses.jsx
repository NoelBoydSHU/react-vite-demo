import React from 'react';
import {useState, useEffect} from 'react';

const Courses = () => {

  const [courseData, setCourseData]= useState(null);
  const dataURL= '/data/courses.json';

  useEffect(()=>{
    fetch(dataURL)
    .then(response => response.json())
    .then(data => {
      setCourseData(data);
      console.dir(data);
    })
  }, [])

  return (
    <div>
      <h1>Course List</h1>
      <div className='course-list'>
      {courseData ? courseData.map((course, index)=>(
            <div key={index}>
                 <h3>{course.CourseTitle}</h3>
                 <p>{course.CourseSummary}</p>
            </div>
   
  )) : <p>Loading courses...</p>}

      </div>
    </div>
  )
}

export default Courses;