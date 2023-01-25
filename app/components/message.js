/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
// import { setComponentTemplate } from '@ember/component';
// import { hbs } from 'ember-cli-htmlbars';

export default class Message extends Component {
  substring = (string, options) => string.substring(options.start, options.end);
}
