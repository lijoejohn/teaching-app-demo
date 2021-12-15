import React from "react";

import { SelectBox } from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Select",
  component: SelectBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SelectBox {...args} />;

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {};
