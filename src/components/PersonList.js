import React from "react";
import PropTypes from "prop-types";
import Person from "./Person";

const PersonList = ({ personList = [], loading = false }) => {
  if (loading && personList.length === 0) {
    return (
      <>
        <h3>loading...</h3>
        <h3>loading...</h3>
        <h3>loading...</h3>
        <h3>loading...</h3>
      </>
    );
  }
  if (personList.length === 0) {
    return <h3>No person in personList, just relax.</h3>;
  }

  console.log(personList);

  return personList.map(one => (
    <div>
      <Person key={one.id} person={one} />
      <hr />
    </div>
  ));
};

export default PersonList;
