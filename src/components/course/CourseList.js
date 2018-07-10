import React, {PropTypes} from 'react';
import CourseListRow from './SingleCourseRow';

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
          {courses.map(course =>
            <CourseListRow course={course}/>
          )}
        </tbody>
      </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
