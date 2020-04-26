import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
//import { xmsdk } from "../../../public/transmit/lib/transmitWebSdk/xm/js/xmsdk";
//const xmsdk = require("../../../public/transmit/lib/transmitWebSdk/xm/js/xmsdk");
//Co
class CoursesPage extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     course: {
  //       title: ""
  //     }
  //   };
  //TODO: change to function component
  state = {
    course: {
      title: "",
    },
  };

  //this.handleChange = this.handleChange.bind(this);
  //};

  handleChange = (event) => {
    //debugger; //redux-flow-1
    // console.log(xmsdk);
    // const sdk = new xmsdk.XmSdk();
    // const connectionSettings = com.ts.mobile.sdk.SDKConnectionSettings.create("http://localhost:80/");
    //let sdk = new
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //alert(this.state.course.title);
    //debugger; //redux-flow-2 - in debugger you might not see this.state.course
    console.log(this.state.course);
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
