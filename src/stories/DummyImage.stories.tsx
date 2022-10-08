import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DummyImage } from '../components/DummyImage'

export default {
  title: 'Example',
  component: DummyImage,
  argTypes: {},
  parameters: {}
} as ComponentMeta<typeof DummyImage>

const Template: ComponentStory<typeof DummyImage> = (args) => <DummyImage {...args} />

export const Default = Template.bind({})
Default.args = {}
