/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
// import { setComponentTemplate } from '@ember/component';
// import { hbs } from 'ember-cli-htmlbars';

export default class Message extends Component {
  substring = (string, start, end) => string.substring(start, end);
}
