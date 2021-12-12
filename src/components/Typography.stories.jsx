import React from "react";

import { Heading, SubHeading, Label, InfoLabel, HLine } from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Typography",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const MainHeading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainHeading.args = {
  label: "Teaching Services",
};

const Template1 = (args) => <SubHeading {...args} />;
export const SubHeadingLarge = Template1.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubHeadingLarge.args = {
  label: "Teaching Services",
};

export const SubHeadingsSmall = Template1.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubHeadingsSmall.args = {
  label: "Teaching Services",
  small: true,
};

const Template2 = (args) => <Label {...args} />;
export const LabelLarge = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LabelLarge.args = {
  label: "Teaching Services",
};

export const LabelSmall = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LabelSmall.args = {
  label: "Teaching Services",
  small: true,
};

const Template3 = (args) => <InfoLabel {...args} />;
export const InfoLabelBase = Template3.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InfoLabelBase.args = {
  label: "Teaching Services",
};

const Template4 = (args) => <HLine {...args} />;
export const HLineBase = Template4.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HLineBase.args = {};
