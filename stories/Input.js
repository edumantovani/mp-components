import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Input from '../src/components/Input'
import Button from '../src/components/Button'

storiesOf('Input', module)
  .add('small', () => (
    <Input placeholder="Type your text here" size="small" id="small" />
  ))

  .add('medium', () => (
    <Input placeholder="Type your text here" id="medium"/>
  ))

  .add('error', () => (
    <Input placeholder="Type your text here" context="error" id="error"/>
  ))

  .add('big', () => (
    <Input placeholder="Type your text here" size="big" id="big"/>
  ))

  .add('with Button addon', () => (
    <div>
      <Input placeholder="Username" hasAddonRight={true} onBlur={action('Focus lost')} onChange={action('Value changed')} id="addon"/>
      <Button context="info" isAddonRight={true} onClick={action('Button clicked')}><i className="ion-checkmark-round"/> Submit</Button>
    </div>
  ))

  .add('with error message', () => (
    <div style={{marginTop: 70, width: 200}}>
      <Input
        placeholder="Email address"
        errorMessage="Invalid email address"
        id="message"
        autoComplete="off"
        onChange={action('Value changed')}
        onFocus={action('Input received focus')}
      />
    </div>
  ))
