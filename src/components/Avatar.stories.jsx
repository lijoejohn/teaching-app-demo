import React from "react";

import { Avatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = { label: "SH" };

export const BasicOnClick = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicOnClick.args = {
  label: "SH",
  onClick: () => {
    alert("Clicked");
  },
};
