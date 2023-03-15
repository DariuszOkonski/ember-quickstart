/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  double = () => {
    this.multiple = this.multiple * 2;
  };
}
