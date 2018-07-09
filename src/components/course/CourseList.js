import React, {PropTypes} from 'react';

const CourseList = ({courses}) => {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course => (
          <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
