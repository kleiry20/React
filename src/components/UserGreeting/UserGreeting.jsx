import PropTypes from "prop-types";

const UserGreeting = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>Welcome {props.username}</h2>
      ) : (
        <h2>Sorry, please log in to continue</h2>
      )}
    </div>
  );
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
