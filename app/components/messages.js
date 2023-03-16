/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MessagesComponent extends Component {
  @tracked messages = [
    {
      username: 'Tomster',
      active: true,
      localtime: '4:56pm',
      content: `
        <p>Welcome to my World Tom</p>
      `,
    },
    {
      username: 'Zoey',
      active: true,
      content: `
        <p>Welcome to my World 2 Zoey</p>
      `,
    },
    {
      username: 'Bob',
      active: true,
      localtime: '5.25pm',
      content: `
        <p>Welcome to my World 2 Zoey</p>
      `,
    },
  ];
}
