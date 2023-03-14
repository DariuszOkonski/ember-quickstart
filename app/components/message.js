/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class Message extends Component {
  getSubstring(str, start, end) {
    return str.substring(start, end);
  }
}
