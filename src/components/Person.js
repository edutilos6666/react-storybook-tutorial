import React from "react";
import propTypes from "prop-types";

export default function Person({ person: { id, fname, lname, working } }) {
  return (
    <div>
      <h3>Infos about Worker {id}</h3>
      <p>fname = {fname} </p>
      <p>lname = {lname} </p>
      <p>working = {working ? "true" : "false"} </p>
    </div>
  );
}

Person.propTypes = {
  person: propTypes.shape({
    id: propTypes.string.isRequired,
    fname: propTypes.string.isRequired,
    lname: propTypes.string.isRequired,
    working: propTypes.bool.isRequired
  })
};
