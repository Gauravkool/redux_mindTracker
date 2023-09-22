import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import "../index.css";

const ButtonStory = {
  title: "Button",
  component: Button,
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    theme: {
      control: "select",
      options: ["primary", "secondary"],
    },
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default ButtonStory;

type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    children: "Sign Up",
  },
};
export const secondary: Story = {
  args: {
    children: "Login",
  },
};
