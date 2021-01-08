import React from "react"

import { Card } from "../Components"

export default {
  title: "Card",
  component: Card,
}

const Template = (args) => <Card {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
