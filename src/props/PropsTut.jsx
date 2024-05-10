import Student from "../components/Student/Student";
import PropTypes from "prop-types";

// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//

const PropsTut = () => {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
    </>
  );
};

// defining the prop types is a good practice
// will not break the UI if values are wrong BUT is helpful while debugging in console
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// default props with values
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default PropsTut;
