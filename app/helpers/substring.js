/* eslint-disable prettier/prettier */
import Helper from '@ember/comonent/helper';

export default class Substring extends Helper {
  compute([string, start, end]) {
    return string.substring(start, end);
  }
}
