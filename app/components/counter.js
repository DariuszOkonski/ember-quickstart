/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked
  count = 0;

  // @tracked
  // multiple = 1;

  get total() {
    // return this.count * this.multiple;
    return this.count * this.args.multiple;
  }

  @action
  double() {
    // this.multiple = this.multiple * 2;
    this.args.updateMultiple(this.args.multiple * 2);
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @action
  clearBoth() {
    this.count = 0;
    this.multiple = 1;
  }
}
