import React from "react";

import { Line } from "./Line";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Line",
  component: Line,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Line {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = { width: "200px" };

export const Progress = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Progress.args = { width: "200px", progress: 25 };
