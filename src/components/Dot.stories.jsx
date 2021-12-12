import React from "react";

import { Dot } from "./Dot";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Dot",
  component: Dot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dot {...args} />;

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {};

export const Blue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blue.args = { color: "#5655c6" };
