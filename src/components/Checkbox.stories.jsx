import React from "react";

import { Check, CheckGroup } from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Checkbox",
  component: Check,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Check {...args} />;

export const Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checkbox.args = {
  onClick: (value) => {
    alert(`Checked value : ${value}`);
  },
  label: "Have you started using it?",
};

export const CheckboxChiled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckboxChiled.args = {
  parent: false,
  onClick: (value) => {
    alert(`Checked value : ${value}`);
  },
  label: "Have you started using it?",
};

const onClick = (value) => {
  alert(`Checked value : ${value}`);
};
const data = [
  {
    parent: true,
    checked: true,
    onClick,
    label: "Regular / Recurring Tutions",
    showInfo: true,
  },
  {
    parent: false,
    checked: false,
    onClick,
    label: "Once a week",
  },
  {
    parent: false,
    checked: false,
    onClick,
    label: "Once a day",
  },
  {
    parent: false,
    checked: false,
    onClick,
    label: "Week Days",
  },

  {
    parent: true,
    checked: true,
    onClick,
    label: "Single / Non-Recurring Tutions",
    showInfo: true,
  },
  {
    parent: false,
    checked: false,
    onClick,
    label: "1:1 Session",
  },
  {
    parent: false,
    checked: false,
    onClick,
    label: "1: Many Session",
  },
];

const Template1 = (args) => <CheckGroup {...args} />;
export const CheckboxGroup = Template1.bind({});
CheckboxGroup.args = { data: data };
