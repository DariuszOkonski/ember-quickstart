/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CounterComponent extends Component {
  @tracked count = 0;

  double = () => {
    this.multiple = this.multiple * 2;
  };

  change = (amount) => {
    this.count = this.count + amount;
  };
}
