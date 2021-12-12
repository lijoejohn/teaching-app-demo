import React from "react";

import { Icon } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Icon {...args} />;

export const Bell = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bell.args = {
  graphics: "bell",
};

export const Subjects = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subjects.args = {
  graphics: "subjects",
  color: "#5655C6",
  height: "22px",
  width: "22px",
};

export const TeachingServices = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeachingServices.args = {
  graphics: "teaching-services",
  color: "#5655C6",
  height: "22px",
  width: "22px",
};

export const User = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
User.args = {
  graphics: "user",
  color: "#C9C9C9",
  height: "20px",
  width: "20px",
};
export const Education = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Education.args = {
  graphics: "education",
  color: "#C9C9C9",
  height: "22px",
  width: "22px",
};
export const Badge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Badge.args = {
  graphics: "badge",
  color: "#C9C9C9",
  height: "22px",
  width: "22px",
};
export const Confirm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Confirm.args = {
  graphics: "confirm",
  color: "#C9C9C9",
  height: "22px",
  width: "22px",
};
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  graphics: "info",
  color: "#5655C6",
  height: "22px",
  width: "22px",
};
