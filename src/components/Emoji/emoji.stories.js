import React from "react";
import Emoji from ".";

export default {
  title: "UI ็ปไปถ/Emoji",
  component: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
  <div>
    <Emoji label="smile">๐</Emoji>
    <Emoji label="todo">โ</Emoji>
    <Emoji label="clock">๐</Emoji>
  </div>
);