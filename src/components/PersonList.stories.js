import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import PersonList from "./PersonList";

export const defaultPersonList = [
  { id: "1", fname: "foo", lname: "bar", working: true },
  { id: "2", fname: "leo", lname: "messi", working: false },
  { id: "3", fname: "cris", lname: "tiano", working: true },
  { id: "4", fname: "roberto", lname: "carlos", working: false }
];

storiesOf("PersonList", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <PersonList personList={defaultPersonList} />;
  })
  .add("loading", () => {
    return <PersonList personList={[]} loading />;
  })
  .add("empty", () => {
    return <PersonList personList={[]} />;
  });
