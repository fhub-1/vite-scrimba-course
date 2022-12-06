import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

// props-tpes

Card.propTypes = {
  cardColor: PropTypes.oneOf(["red", "blue"]).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
};

// defaults-props
Card.defaultProps = {
  //   cardColor: "blue",
  //   height: 100,
  //   width: 100,
};

export default Card;
