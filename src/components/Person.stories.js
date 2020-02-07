import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Person from "./Person";

export const person = {
  id: "1",
  fname: "foo",
  lname: "bar",
  working: false
};

storiesOf("Person", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    // return <Person person={object("person", { ...person })} />;
    return <Person person={person} />;
  })
  .add("messi", () => {
    return (
      <Person
        person={{
          ...person,
          id: "2",
          fname: "leo",
          lname: "messi",
          working: true
        }}
      />
    );
  })
  .add("cr7", () => {
    return (
      <Person
        person={{
          ...person,
          id: "3",
          fname: "cris",
          lname: "tiano",
          working: true
        }}
      />
    );
  });
