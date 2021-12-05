import React from "react";
import s from "./Button.module.scss";
import PropTypes from "prop-types";
export default function Button({ loadMore }) {
  return (
    <>
      <button className={s.button} type="button" onClick={loadMore}>
        Load More
      </button>
    </>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func,
};
