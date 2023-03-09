/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class Calculator extends Component {
  calculate(first, second, options) {
    if (options === 'add') {
      return first + second;
    }
    if (options === 'sub') {
      return first - second;
    }
  }

  sum(first, second) {
    return first + second;
  }

  multiply(first, second) {
    return first * second;
  }
}
