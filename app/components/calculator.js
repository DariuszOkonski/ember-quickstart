/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class Calculator extends Component {
  calculate(first, second) {
    return first + second;
  }

  subtraction(first, second) {
    return first - second;
  }
}
