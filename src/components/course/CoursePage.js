import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <div>
            <h1>Courses</h1>
            <input
              type="submit"
              value="Add Course"
              className="btn btn-primary" />
          </div>
        );
    }
}

CoursePage.PropTypes = {
    //myProps: PropTypes.string.isRequired
};

export default CoursePage;
