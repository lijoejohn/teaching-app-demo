import React from "react";

import { MenuItem } from "./MenuItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/MenuItem",
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MenuItem {...args} />;

export const Item = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Item.args = {
  label: "Dashboard",
  onClick: () => {
    alert("Clicked");
  },
};
