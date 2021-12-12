import React from "react";

import { TopHead } from "./TopHead";
import { MenuItem } from "./MenuItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TopHead",
  component: TopHead,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TopHead {...args} />;

const menuItems = () => {
  return (
    <>
      <MenuItem label="Dashboard" />
      <MenuItem label="Classes" />
      <MenuItem label="Messages" />
      <MenuItem label="Payments" />
      <MenuItem label="Settings" />
    </>
  );
};
const menuItems2 = () => {
  return (
    <>
      <MenuItem label="Dashboard" />
      <MenuItem label="Classes" />
      <MenuItem label="Messages" />
    </>
  );
};
export const Nav = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Nav.args = { menuItems: menuItems() };

export const NavWith2Menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavWith2Menu.args = { menuItems: menuItems2() };

export const NavWithoutNotification = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavWithoutNotification.args = {
  menuItems: menuItems(),
  showNotification: false,
};

export const NavWithoutAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavWithoutAvatar.args = {
  menuItems: menuItems(),
  showNotification: false,
  showAvatar: false,
};
