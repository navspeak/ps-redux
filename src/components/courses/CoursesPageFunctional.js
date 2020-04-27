import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../redux/actions/courseActions";

const CoursesPageFunctional = (props) => {

  //state = { course: { title: "a" } }
  const [ state, setState] = useState( {course: {title: "" }});
  const handleChange = event => {
    debugger;
    const course = { ...state.course, title: event.target.value };
    setState({course});
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitting  ${JSON.stringify(state.course)}`)
    props.actions.createCourse(state.course);
  };

  return(
        <form onSubmit={handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
              type="text"
              onChange={handleChange}
              value={state.course.title}
          />
          <input type="submit" value="Save" />
          {props.courses.map((course) => (
              <div key={course.title}>{course.title}</div>
          ))}
        </form>
  );

};

CoursesPageFunctional.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };

function mapStateToProps(state) {
debugger; //redux-flow-4
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPageFunctional);