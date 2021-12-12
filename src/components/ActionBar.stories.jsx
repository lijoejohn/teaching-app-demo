import React from "react";

import { ActionBar } from "./ActionBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/ActionBar",
  component: ActionBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ActionBar {...args} />;

const data = [
  { label: "Select Subjects", progress: 100, icon: "subjects" },
  { label: "Teaching Services", progress: 40, icon: "teaching-services" },
  { label: "Basic Information", progress: 0, icon: "user" },
  { label: "Education & Experience", progress: 0, icon: "education" },
  { label: "Your Accomplishments", progress: 0, icon: "badge" },
  { label: "Final Confirmation", progress: 0, icon: "confirm" },
];

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = { data };
