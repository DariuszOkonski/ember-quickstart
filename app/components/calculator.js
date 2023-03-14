/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class Calculator extends Component {
  add(first, seconds) {
    return first + seconds;
  }

  multiply(first, second) {
    return first * second;
  }
}
