import React from "react";

import { Container, ChildContainer } from "./Container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Container",
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Container {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template1 = (args) => <ChildContainer {...args} />;

export const Child = Template1.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Child.args = {};
